import { TAbstractFile, Vault } from 'obsidian';

import { TextInputSuggest } from './suggest';

export class FolderSuggest extends TextInputSuggest<TAbstractFile> {
    getSuggestions(inputStr: string): TAbstractFile[] {
        const lowerCaseInputStr = inputStr.toLowerCase();
        const files: TAbstractFile[] = [];
        Vault.recurseChildren(this.app.vault.getRoot(), (file) => {
            // if the path contains more than 2 slashes, continue
            if (file.path.split("/").length > 3) return;
            // if the path has a binary extension, continue
            if (file.path[file.path.length - 1] >= "a" && file.path.contains(".")) return;
            if (file.path.toLowerCase().contains(lowerCaseInputStr)) {
                files.push(file);
            }
        });
        return files;
    }

    renderSuggestion(file: TAbstractFile, el: HTMLElement): void {
        el.setText(file.path);
    }

    selectSuggestion(file: TAbstractFile): void {
        this.inputEl.value = file.path;
        this.inputEl.trigger("input");
        this.close();
    }
}

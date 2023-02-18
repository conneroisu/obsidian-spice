import { App, PluginSettingTab, Setting } from 'obsidian';

import ObSpice from '../../main';
import { DEFAULT_SETTINGS } from './ObSpiceSettings';
import { FolderSuggest } from './suggest/folder_suggest';
import { debouncedSetComponentsFromFileOrFolder } from './suggest/fuzzy_utils';

export class ObSpiceSettingTab extends PluginSettingTab {
    plugin: ObSpice;
    componentsFolderElement: HTMLElement;
    inputfolder: HTMLInputElement;

    constructor(app: App, plugin: ObSpice) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;

        containerEl.empty();

        containerEl.createEl('h2', { text: 'Obsidian Spice Settings' });
        const componentFolderLocation = new Setting(containerEl)
			.setName("Components Folder Location")
			.setDesc( "The location of the folder where your components used in simulations are stored and loaded from.");
		componentFolderLocation.addText((text) => {
			text.setPlaceholder(DEFAULT_SETTINGS.componentFolder)
				.setValue(this.plugin.settings.componentFolder)
				.onChange(async (text) => {
					this.inputfolder.value = text;
					this.plugin.settings.componentFolder = text;
					debouncedSetComponentsFromFileOrFolder(this.plugin);
					console.log("New folder path: " + text);
					await this.plugin.saveSettings();
				});
			this.inputfolder = text.inputEl;
		});
		this.componentsFolderElement = componentFolderLocation.settingEl;
		new FolderSuggest(this.app, this.inputfolder);
    }
}

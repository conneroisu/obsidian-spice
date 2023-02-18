import { ItemView } from 'obsidian';

import { VIEW_TYPE } from '../../main';
import ObSpice from './ObSpice.svelte';

export class ObSpiceView extends ItemView {

    view: ObSpice;

    getViewType(): string {
        return VIEW_TYPE;
    }

    getDisplayText(): string {
        return "Dice Roller";
    }

    getIcon(): string {
        return "obspicelogo";
    }

    async onOpen(): Promise<void> {

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.view = new ObSpice({ target: (this as any).contentEl, props: {} });
    }
}

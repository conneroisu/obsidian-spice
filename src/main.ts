import { addIcon, Plugin } from 'obsidian';

import { obspicesvg } from './ui/assets/obspicelogos';
import { ObSpiceView } from './ui/interface/ObSpiceView';
import { DEFAULT_SETTINGS, ObSpiceSettings } from './ui/settings/ObSpiceSettings';
import { ObSpiceSettingTab } from './ui/settings/ObSpiceSettingTab';

export const VIEW_TYPE = "svelte-view";
/*
 * This is the main plugin class. It is responsible for registering the plugin, commands, settings, and views.
 * It also contains the main plugin logic allowing the plugin to interact with Obsidian and it's components/plugins.
*/
export default class ObSpice extends Plugin {
    private view: ObSpiceView;
    settings: ObSpiceSettings;
    activeTabValue: number;

    async onload() {
        this.activeTabValue = 0;
        await this.loadSettings();
        addIcon("obspicelogo", obspicesvg);

        this.registerView(
            VIEW_TYPE,
            (leaf) => (this.view = new ObSpiceView(leaf))
        );
        const obspicesidebar = this.addRibbonIcon('obspicelogo', 'Obsidian Spice', () => { this.openObSpiceView(); });
        obspicesidebar.addClass('obspice-ribbon-icon');
        this.app.workspace.onLayoutReady(this.onLayoutReady.bind(this));


        // This adds a simple command that can be triggered anywhere
        this.addCommand({
            id: 'open-obsidian-spice-view',
            name: 'Open Obsidian Spice View',
            callback: () => this.openObSpiceView(),
        });

        this.addCommand({
            id: 'open-obsidian-spice-component-view',
            name: 'Open Obsidian Spice Component View',
            callback: () => {
                this.openObSpiceView();
                this.activeTabValue = 1;
            },
            
        });
        // This adds a settings tab so the user can configure various aspects of the plugin
        this.addSettingTab(new ObSpiceSettingTab(this.app, this));
    }

    onLayoutReady(): void {
        if (this.app.workspace.getLeavesOfType(VIEW_TYPE).length) {
            return;
        }
        this.app.workspace.getRightLeaf(false).setViewState({
            type: VIEW_TYPE,
        });
    }

    onunload() {

    }

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }

    async openObSpiceView() {
        const workspace = this.app.workspace;
        workspace.detachLeavesOfType(VIEW_TYPE);
        const leaf = workspace.getRightLeaf(false);
        await leaf.setViewState({ type: VIEW_TYPE });
        workspace.revealLeaf(leaf);
    }
}



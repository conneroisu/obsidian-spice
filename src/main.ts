import { addIcon, Plugin } from 'obsidian';

import { obspicesvg } from './ui/assets/obspicelogos';
import { ObSpiceView } from './ui/interface/ObSpiceView';
import { DEFAULT_SETTINGS, ObSpiceSettings } from './ui/settings/ObSpiceSettings';
import { ObSpiceSettingTab } from './ui/settings/ObSpiceSettingTab';

export const VIEW_TYPE = "svelte-view";

export default class ObSpice extends Plugin {
    private view: ObSpiceView;
    settings: ObSpiceSettings;

    async onload() {
        await this.loadSettings();
        addIcon("obspicelogo", obspicesvg);

        this.registerView(
            VIEW_TYPE,
            (leaf) => (this.view = new ObSpiceView(leaf))
        );
        const obspicesidebar = this.addRibbonIcon('obspicelogo', 'Obsidian Spice', () => { this.openMapView(); });
        obspicesidebar.addClass('obspice-ribbon-icon');
        this.app.workspace.onLayoutReady(this.onLayoutReady.bind(this));


        // This adds a simple command that can be triggered anywhere
        this.addCommand({
            id: 'open-obsidian-spice-view',
            name: 'Open Obsidian Spice View',
            callback: () => this.openMapView(),
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

    async openMapView() {
        const workspace = this.app.workspace;
        workspace.detachLeavesOfType(VIEW_TYPE);
        const leaf = workspace.getRightLeaf(false);
        await leaf.setViewState({ type: VIEW_TYPE });
        workspace.revealLeaf(leaf);
    }
}



import { debounce, Plugin, TFile, TFolder } from 'obsidian';


export function isInFolder(file: TFile, dir: TFolder) {

    let cur = file.parent;
    let cnt = 0;
    
    while (cur && (!cur.isRoot()) && (cnt < 100)) {

        if (cur.path === dir.path) return true;
        
        cur = cur.parent;
        cnt++;
    }

    return false;
}


export const debouncedSetComponentsFromFileOrFolder = debounce(async (plugin: Plugin, path?: string) => {
}, 10, false);


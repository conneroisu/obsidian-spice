import { writable } from 'svelte/store';

export const query = writable("");
export const simulationSettings = [
    {
        label: "Type of Simulation",
        value: 1,
        logo: "",

    }, 
    {
        label: "Grid Size",
        value: 1,
        logo: "",
    }
]

import { derived, writable } from 'svelte/store';

import { capacitorlogo, inductorlogo, resistorlogo } from '../../../assets/obspicelogos';

    export const basicItems = [
        {
            label: "Resistor",
            value: 1,
            logo: resistorlogo,
        },
        {
            label: "Capacitors",
            value: 2,
            logo: capacitorlogo,
        },
        {
            label: "Inductors",
            value: 3,
            logo: inductorlogo,
        }
    ];
export const query = writable('');
export const items = writable(basicItems);
export const filtered = derived(
	[query, items], 
	([$query, $items]) => $items.filter(x => x.label.toLowerCase().includes($query.toLowerCase()))
);

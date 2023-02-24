<script>
	import Componentcard from './Components/ui/componentcard.svelte';
	import Tab1 from "./Simulation/SimulationTab.svelte";
	import Tab2 from "./Components/ui/ComponentTab.svelte";
	import Tab3 from "./SchematicTab.svelte";
  import Tabs from "./Tabs.svelte";

    import {componentslogo, schematiclogo, simulationlogo } from "../assets/obspicelogos.ts";

  // List of tab items with labels, values and assigned components
  let items = [
    { label: "Simulation",
		 value: 1,
		 component: Tab1,
         slabel: "sim",
         logo: simulationlogo,
		},
    { label: "Components",
		 value: 2,
		 component: Tab2,
            slabel: "comp",
            logo: componentslogo,
		},
    { label: "Schematic",
		 value: 3,
		 component: Tab3,
            slabel: "sch",
            logo: schematiclogo,
		}
  ];
</script>
<Tabs {items} />

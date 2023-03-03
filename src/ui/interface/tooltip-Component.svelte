<script>
    import { Popper } from 'svelte-popper';
    export let item;
    let show;
    let hover = false;
    let tooltip;
</script>

<style>
    .tooltip {
        display: block;
        background-color: lightgray;
        border-radius: 3px;
        position: absolute;
        padding: 10px;
    }

    .tooltip.visible {
        display: none;
    }
</style>


<!-- Bind the tooltip to the hover event -->
<div bind:this={tooltip} class="tooltip {hover ? 'visible' : ''}" on:mouseenter={() => show = true} on:mouseleave={() => show = false}>

<!-- Default value for tooltip is ^  -->


</div>

<!-- Path: src\ui\interface\Simulation\ui\tabs\tooltip-Component.svelte -->
<!-- Compare this snippet from src\ui\interface\ObSpice.svelte: -->
<!-- <script> -->
<!-- 	import Componentcard from './Components/ui/componentcard.svelte'; -->
<!-- 	import Tab1 from "./Simulation/ui/SimulationTab.svelte"; -->
<!-- 	import Tab2 from "./Components/ui/ComponentTab.svelte"; -->
<!-- 	import Tab3 from "./Schematic/SchematicTab.svelte"; -->
<!-- 	import Tabs from "./Tabs.svelte"; -->
<!-- 	import {componentslogo, schematiclogo, simulationlogo } from "../assets/obspicelogos.ts"; -->
<!--  -->
<!--   // List of tab items with labels, values and assigned components -->
<!--   let items = [ -->
<!--     { label: "Simulation", -->
<!-- 		 value: 1, -->
<!-- 		 component: Tab1, -->
<!--          slabel: "sim", -->
<!--          logo: simulationlogo, -->
<!-- 		}, -->
<!--     { label: "Components", -->
<!-- 		 value: 2, -->
<!-- 		 component: Tab2, -->
<!--             slabel: "comp", -->
<!--             logo: componentslogo, -->
<!-- 		}, -->
<!--     { label: "Schematic", -->
<!-- 		 value: 3, -->
<!-- 		 component: Tab3, -->
<!--             slabel: "sch", -->
<!--             logo: schematiclogo, -->
<!-- 		} -->
<!--   ]; -->
<!-- </script> -->
<!-- <Tabs {items} /> -->
<!--  -->
<!-- Compare this snippet from src\ui\interface\Tabs.svelte: -->
<!--   export let activeTabValue = 1; -->
<!--   const handleClick = (tabValue) => () => (activeTabValue = tabValue); -->
<!--   export function setactiveTabValue(tabValue){ -->
<!--     activeTabValue = tabValue; -->
<!--   } -->
<!-- </script> -->
<!-- <ul> -->
<!-- {#each items as item} -->
<!-- 	<li class={activeTabValue === item.value ? ' -->

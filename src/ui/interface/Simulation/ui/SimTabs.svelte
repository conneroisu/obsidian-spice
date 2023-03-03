<script>
	import { Popper } from 'svelte-popper';
    let show;
    let hoveredItem;
    import { createPopper } from "@popperjs/core";
    import { query_selector_all } from "svelte/internal";
    export let items = [];
    export let activeSimTabValue = 1;
    const handleClick = tabValue => () => (activeSimTabValue = tabValue);
    function handleHover(item) {
        hoveredItem = item;
        // create a popper instance for the tooltip
        const popperInstance = createPopper(item, item.tooltip, {
            placement: "right",
            modifiers: [
                {
                    name: "offset",
                    options: {
                        offset: [0, 10],
                    },
                },
            ],
        });
    }
</script>
<ul>
{#each items as item}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
    <li class:active={activeSimTabValue == item.value} class:inactive={activeSimTabValue != item.value} on:click={handleClick(item.value)}
    on:hover() {handleHover}>
        {item.label}
{/each}
</ul>
{#each items as item}
	{#if activeSimTabValue == item.value}
	<div class="box">
		<svelte:component this={item.component}/>
	</div>
	{/if}
{/each}

<style>
    .box {
        margin-bottom: 10px;
        padding: 40px;
        border: 1px solid #dee2e6;
        border-radius: 0 0 .5rem .4rem;
        border-top: 0;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;
        border-bottom: 1px solid #dee2e6;
    }
    li {
        padding: 0.5rem 1rem;
        border: 1px solid #dee2e6;
        border-radius: .5rem .5rem 0 0;
        border-bottom: 0;
        cursor: pointer;
    }
    li:hover { background-color: #dee2e6; }

    li.active {
        background-color: #dee2e661;
        transform: translate3d(0, 0, 0);
    }
    li.inactive {
        background-color: #f8f9fa00;
        transform: translate3d(0, 0 , 0);
    }

</style>

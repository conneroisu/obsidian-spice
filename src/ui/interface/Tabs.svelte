<script>
	import { createPopper } from '@popperjs/core';
    import TooltipComponent from './tooltip-Component.svelte';
  export let items = [];
  export let activeTabValue = 1;
  const handleClick = (tabValue) => () => (activeTabValue = tabValue);
  export function setactiveTabValue(tabValue){
    activeTabValue = tabValue;
  }
</script>
<ul>
{#each items as item}
	<li class={activeTabValue === item.value ? 'active' : 'inactive'}>
        {#if activeTabValue == item.value}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span on:click={handleClick(item.value)}>{item.label} <TooltipComponent>it</TooltipComponent><span class="activeuilogo" on:click={handleClick(item.value)}>{@html item.logo}</span></span>
        {:else}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span on:click={handleClick(item.value)}>{item.label}<span class="inactiveuilogo" on:click={handleClick(item.value)}>{@html item.logo}</span></span>
        {/if}
	</li>
{/each}
</ul>
{#each items as item}
	{#if activeTabValue == item.value}
	<div class="box">
		<svelte:component this={item.component}/>
	</div>
	{/if}
{/each}
<style>
    .activeuilogo{
        display: block;
        margin-top: -3em;
        margin-left: auto;
        margin-right: auto;
        width: 2em;
        height: 2em;
        transform: scale(0.15);
        /*Transform using the filter tool in Figma using the primary color */
        filter: invert(12%) sepia(12%) saturate(309%) hue-rotate(188deg) brightness(94%) contrast(93%);
    }
    .inactiveuilogo{
        display: block;
        margin-top: -3em;
        margin-left: auto;
        margin-right: auto;
        width: 2em;
        height: 2em;
        transform: scale(0.15);
        filter: invert(99%) sepia(99%) saturate(13%) hue-rotate(243deg) brightness(104%) contrast(100%);
    }
	.box {
		margin-bottom: 10px;
		border: 1px solid #dee2e6;
        border-radius: 0 0 .5rem .4rem;
        border-top: 0;
	}
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid #dee2e6;
  }
    li.active {
        width: 7em;
        height: 3em;
        transform: translate3d(0,0 , 0);
        text-justify: center;
        display: flex;
        justify-content: center;
    }

    li.inactive {
        width: 7em;
        height: 3em;
        transform: translate3d(0,0 , 0);
        text-justify: center;
        display: flex;
        justify-content: center;
    }
  span {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  span:hover {
    border-color: #c9e3fd #e9ecef #dee2e6;
  }

  li.active > span {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #7f8e9c #b9b9b9;
  }
</style>

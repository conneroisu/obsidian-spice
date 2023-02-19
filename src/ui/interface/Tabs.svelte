<script>
	import { createPopper } from '@popperjs/core';
    import {componentslogo, schematiclogo, simulationlogo } from "../assets/obspicelogos";
  export let items = [];
  export let activeTabValue = 1;
  const handleClick = tabValue => () => (activeTabValue = tabValue);
  const handleClicked = tabValue => () => {
    console.log('clicked');
    activeTabValue = tabValue;
    // Add an filter to the logo with the label of the tab
    // document.querySelector('.uilogo').style.filter = 'invert(99%) sepia(99%) saturate(13%) hue-rotate(243deg) brightness(104%) contrast(100%)';
  };
</script>
<ul>
{#each items as item}
	<li class={activeTabValue === item.value ? 'active' : 'inactive'}>
        <!-- Show the logo under the tab -->
        <!-- if the tab is aactive the logo should be white -->
        {#if activeTabValue == item.value}
            <span on:click={handleClicked(item.value)}>{item.label}<span class="activeuilogo" on:click={handleClicked(item.value)}>{@html item.logo}</span></span>
        {:else}
            <span on:click={handleClicked(item.value)}>{item.label}<span class="inactiveuilogo" on:click={handleClicked(item.value)}>{@html item.logo}</span></span>
        {/if}
            <!-- {#if activeTabValue != item.value}
                <span on:click={handleClicked(item.value)}>{@html item.logo}</span>
            {:else}
                <span on:click={handleClick(item.value)}>{item.label}</span>
            {/if} -->
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
		padding: 40px;
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
        transform: translate3d(0, -.8em , 0);
        text-justify: center;
        display: flex;
        justify-content: center;
    }

    li.inactive {
        width: 7em;
        height: 3em;
        transform: translate3d(0, -.8em , 0);
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

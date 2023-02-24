<script>
    import { createPopper } from "@popperjs/core";
    export let items = [];
    export let activeSimTabValue = 1;
    const handleClick = tabValue => () => (activeSimTabValue = tabValue);
</script>
<ul>
    {#each items as item}
    <li class={activeSimTabValue === item.value ? "active" : "inactive"}>
        <!-- TODO - need to add a popper popover for describing each tab if user hovers -->
        <!-- if the tab is aactive the logo should be white -->
        {#if activeSimTabValue == item.value}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span on:click={handleClick(item.value)}>{item.label}<span class="activeuilogo" on:click={handleClick(item.value)}>{@html item.logo}</span></span>
        {:else}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span on:click={handleClick(item.value)}>{item.label}<span class="inactiveuilogo" on:click={handleClick(item.value)}>{@html item.logo}</span></span>
        {/if}
    </li>
{#if activeSimTabValue == item.value}
<div class="box">
    <svelte:component this={item.component}/>
</div>
{/if}
{/each}
</ul>

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
    li.inactive {
        width: 7em;
        height: 3em;
        transform: translate3d(0, -.8em , 0);
        text-justify: center;
        display: flex;
        justify-content: center;
    }
    li:hover {
        background-color: #dee2e6;
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
        display: flex;
        align-items: center;
        justify-content: center;
    }
    span:hover {
        background-color: #dee2e6;
    }
    li.active > span {
        color: #495057;
    }

</style>

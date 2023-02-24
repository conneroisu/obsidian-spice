<script>
	import { query } from './cstore.ts';
    let val = '';

    $: query.set(val);
</script>

<input type="text" class="search_input" id="searchInput" bind:value={val} placeholder="Search Components" />

<style>
    .search_input {
        width: 100%;
        padding: 12px 20px;
        padding-top: -3em;
        margin: 8px 0;
        box-sizing: border-box;
        border: 2px solid #ccc;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        outline: none;
    }
</style>

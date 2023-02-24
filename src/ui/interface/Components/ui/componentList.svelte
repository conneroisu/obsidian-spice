<script>
    import { filtered } from "../data/cstore";
    import Componentcard from "./componentcard.svelte";
</script>

<div>
    {#each $filtered as item}
        <div class="box">
            <Componentcard basicItem={item}/>
        </div>
    {/each}
</div>


<script>
    let stop_time = 0;
    let start_time = 0;
    let max_timestep = 0;
    let external_dc_supply_at_zero = false;
</script>
<h3>Transient Simulation</h3>

<!-- Stop Time Input -->
<input type="number" bind:value={stop_time} placeholder="Stop Time" />

<!-- Time to start saving data  -->
<input type="number" placeholder="0" bind:value={start_time} />

<!-- Maximum Timestep -->
<input type="number" placeholder="0" bind:value={max_timestep} />

<!-- Start External DC Supply voltage at 0V -->
<input type="checkbox" bind:value={external_dc_supply_at_zero} />

<!-- Stop Simulation if steady state is reached -->
<span>Stop simulating if steady state is reached</span>
<input type="checkbox" /> 

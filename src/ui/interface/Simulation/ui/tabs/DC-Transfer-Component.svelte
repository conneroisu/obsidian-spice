<script>
	import  {Popper}  from  'svelte-popper' ;
	let show;
	let button;
	let tooltip;
</script>

<style>
	.button {
		position: relative;
	}
	
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

<button bind:this={button} on:click={() => {
		show = !show;
		if (show) {
			Popper.createPopper(button, tooltip, {
				placement: 'right',
		 		modifiers: [
					{
						name: 'offset',
						options: {
							offset: [0, 10],
						},
					},
				],
			});
		}
	}} class="button">
	Toggle
</button>

<div bind:this={tooltip} class="tooltip {show ? 'visible' : ''}">
	Tooltip
</div>

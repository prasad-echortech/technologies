<script>
	"use strict";
	let name = "prasad";
	let channel = `<b>tv9</b>`;
	let hack = `<a href="#" onclick="alert("hacked boom*******")">Win A prize <a/>`;
	// let h3id = "hdr"
	let id = "ddr";
	let disabled = false;
	const status = `success`;
	// const isPromoted = true
	let promoted = true;
	let num1 = 10;
	let num2 = 15;
	let num3 = 99;
	let arr = ["prasad", "sarella", "EchorTech"];
	let objarr = [
		{ name: "venkat", price: 24 },
		{ name: "car", price: 90 },
		{ name: "ship", price: 10 },
		{ name: "cycle", price: 89 },
		{ name: "plane", price: 40 },
		{ name: "choper", price: 30 },
		{ name: "rocket", price: 70 },
		{ name: "boeing", price: 1000 },
		{ name: "bullet", price: 100 },
	];
	let count = 1000;

	function clickInc() {
		return (count -= 1);
	}
</script>

<main>
	<h1>hello <b>{name}</b></h1>
	<div>{@html channel}</div>
	<div>{@html hack}</div>
	<h3 {id}>Heading of my html</h3>
	<button {disabled}>bind</button>
	<p class="underline">underline text</p>
	<h2 class={status}>Status</h2>
	<!-- <h2 class="{isPromoted ? "promoted" : ""}">Promoted</h2>
	<h2 class:promoted = {isPromoted}>Promoted</h2> -->
	<h2 class:promoted>Promoted</h2>
	{#if num1 > num2}
		{#if num1 > num3}
			<h1>{num1} is greater</h1>
		{:else}
			<h1>{num3} is greater</h1>
		{/if}
	{:else if num2 > num3}
		<h1>{num2} is greater</h1>
	{:else}
		<h1>{num3} is greater</h1>
	{/if}

	<div>
		<h1>for each</h1>
		{#each arr as name, index}
			<h4>{index} {name}</h4>
		{/each}
	</div>
	<h1>for each for arrayobj'S</h1>
	{#each objarr as oa, index (oa.name)}
		<p style="color:blue"><b> {oa.name} {oa.price}</b></p>
	{/each}
	<div />
	
		<!-- <button on:click={()=> (count = count-1)}>counter {count}</button> -->
		<button on:click={clickInc}>counter {count}</button>
</main>

<style>
	.underline {
		text-decoration: underline;
		text-decoration-color: red;
		background-color: black;
		color: yellowgreen;
	}
	.danger {
		color: red;
	}
	.success {
		color: greenyellow;
	}
	.promoted {
		font-style: italic;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

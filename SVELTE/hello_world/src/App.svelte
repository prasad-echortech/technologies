<!-- <script>
	export let name;
	let birthYear = 1999;
	let currentYear = 2023;
	let a = 100;
	let b = 100;
</script>

<main>
	<h1>age {currentYear - birthYear}</h1>
	<h1>sum {a + b}</h1>
	<h1>sub {a - b}</h1>
	<h1>mul {a * b}</h1>
	<h1>div {a / b}</h1>
	<h1>rem {a % b}</h1>
	<h1>sarella {name}!</h1>

	<p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p>

</main>

<style>
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		text-transform: lowercase;
		font-size: 1em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style> -->

<script>
	let name = "prasad sarella";
	import nested from "./Nested.svelte";
</script>

<h1>my name is {name.toUpperCase()}</h1>
<h1>my name is {name.toLowerCase()}</h1>

<p>this a parahraph</p>
<p>this is a paragraph nested</p>

<style>
	
	p {
		color: red;
		background-color: black;
		font-size: 100px;
	}

</style>

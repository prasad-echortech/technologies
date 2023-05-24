<script>
	let name  = "prasad"
	let channel = `<b>tv9</b>`
	let hack = `<a href="#" onclick="alert("hacked boom*******")">Win A prize <a/>`
	let idofh1 = "heading"
let disabled = false
</script>

<main>
	<h1>hello <b>{name}</b></h1>
	<div>{@html channel}</div>
	<div>{@html hack}</div>
	<h1 {idofh1}>Heading of my html</h1>
	<button {disabled}>bind</button>
	
</main>

<style>
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
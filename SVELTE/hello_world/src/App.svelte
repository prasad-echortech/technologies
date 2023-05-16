<script>
	import Nested from "./Nested.svelte";
	let name = "sarella sai durga prasad";
	let age = 23;
	let education = "Btech";
	let src =
		"https://imageproxy.youversionapi.com/1280x1280/https://s3.amazonaws.com/static-youversionapi-com/images/base/58418/1280x1280.jpg";

	let count = 0;
	$: incrementer = count * 2;

	function incCount() {
		count += 1;
		console.log(count);
	}
	$: {
		console.log("The Count " + count);
		alert("i said the count is :" + count);
		if (count >= 5) {
			alert("count is dangerously high " + count);
		}
	}

	let arr = [1, 2, 3, 4];

	function addNumber() {
		arr.push(arr.length + 1);
	}

</script>

<h1>name : {name.toUpperCase()}</h1>
<h2>age : {age}</h2>
<h3>Education : {education.toUpperCase()}</h3>
<div>
	<img {src} alt="" />
</div>
<p>this is a paragraph</p>
<Nested />
<div>
	<button on:click={incCount}>
		clicked {count} {count === 1 ? "time" : "times"}</button
	>

	<p>{count} double {count * 5}</p>

	<button on:click={addNumber}>add A Number</button>
</div>

<Statements />

<style>
	* {
		text-align: center;
		padding: 0;
		margin: 0;
	}

	h1 {
		color: purple;
		font-size: 2em;
	}
	img {
		height: 200px;
	}
	p {
		color: red;
		background-color: black;
	}
	button {
		color: white;
		background-color: black;
		padding: 10px;
		border-radius: 50px;
		border: none;
		margin: 5px;
	}
</style>

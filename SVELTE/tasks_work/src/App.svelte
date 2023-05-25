<script>
    import FormHandle from "./Components/FormHandle.svelte";
	import Timer from "./Components/TimerCD.svelte";
	import TimerHMS from "./Components/TimerHMS.svelte";
	import Dummy from "./Components/dummy.svelte";
	const name = "chittibabu";
	const hn = "hero4";
	let obj = {
		name: "echortech",
		heroname: "vamshi",
	};
</script>

<main>
	<TimerHMS />
	<Timer />
	<Dummy name="prasad" heroname="hero1" />
	<Dummy name="venkat" heroname="hero2" />
	<Dummy name="venkatalakshmi" heroname="hero3" />
	<Dummy {name} heroname={hn} />
	<Dummy {name} />
	<Dummy name={obj.name} heroname={obj.heroname} />
	<!-- lag orocess for objects -->
	<!-- bellow is shorthand -->
	<Dummy {...obj} />
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
		font-size: 2em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

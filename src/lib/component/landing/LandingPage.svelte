<script lang="ts">
	import Nav from './Nav.svelte';
	import Hero from './Hero.svelte';
	import Feature2 from './Feature2.svelte';
	import Features from './Features.svelte';
	import Cards from './Cards.svelte';
	import CallToAction from './CallToAction.svelte';
	import Footer from './Footer.svelte';
	import Scroller from './components/Scroller.svelte';
	import Chatbot from './Chatbot.svelte';
</script>

<div
	class=" text-white gradient gap-2 justify-around"
	style="font-family: 'Source Sans Pro', sans-serif;"
>
	<Nav />
	<Cards />
	<Scroller/>
	<Hero />
	<Chatbot />
	<Feature2 />

	<Features />


	<CallToAction />

	<Footer />
</div>


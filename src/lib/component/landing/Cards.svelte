
<script lang="ts">
	import Card from './components/Card.svelte';
	import {t} from '$lib/i18n';
</script>

<section class="bg-white border-b py-8">
	<div class="container mx-auto flex flex-wrap pt-4 pb-12">
		<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">{$t("farm")}</h1>
		<div class="w-full mb-4">
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
		</div>

    <Card content1={"Laptop and PC"} content2={"Screen replacement,Virus removal"} btn={"Book"}/>

    <Card content1={"Air Conditioning Repair"} content2={"Gas refill, compressor failure, thermostat issues"} btn={"Book"}/>

    <Card content1={"Refrigerator Emergency Care"} content2={"Cooling failure, frost buildup, door seal leaks"} btn={"Book"}/>

  </div>
</section>

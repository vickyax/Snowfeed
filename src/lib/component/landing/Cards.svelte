
<script lang="ts">
	import Card from './components/Card.svelte';
	import {t} from '$lib/i18n';
  import Search from './components/See.svelte';
  import Scroller from './components/Scroller.svelte';
</script>

<section class="bg-white border-b pt-20">
	<div class="container mx-auto flex flex-wrap pt-4">
		<h1 class="w-full mt-5 lg:text-5xl md:text-3xl text-2xl font-bold leading-tight text-center text-gray-800">{$t("farm")}</h1>
    <Search/>
    
    <Card image={"laptop.jpg"} content1={"Laptop and PC"} content2={"Screen replacement,Virus removal"} />

    <Card image={"acimage.jpg"} content1={"Air Conditioning Repair"} content2={"Gas refill, compressor failure issues"} />

    <Card image={"fridge.png"} content1={"Refrigerator Emergency Care"} content2={"Cooling failure, frost buildup, door seal leaks"} />

    <Card image={"smarttv.png"} content1={"TV, Smart Tv Repair"} content2={"flickering screens, audio delays"} />

    <Card image={"washingmachine.png"} content1={"Washing Machine Repair"} content2={"Draining problems Washer not turning on"} />

    <Card image={"wifi.png"} content1={"Wifi Router"} content2={"slow connection, frequent drops, Overheating"} />

  </div>
</section>


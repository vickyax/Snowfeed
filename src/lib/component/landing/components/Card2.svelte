<script lang="ts">
	import { Container } from 'postcss';
	export let content1: string = 'Default content';
	export let image: string = 'Default content';
	export let content2: string = 'Default content';
	export let link: string = '#';
    
	// export let btn: string = 'Default content';
	import { fade, scale } from 'svelte/transition';

	// Corrected combined fade and scale transition
	function fadeAndScale(node: Element, params: any) {
		return {
			delay: params.delay || 0,
			duration: params.duration || 400,
			css: (t: number) => `
				opacity: ${t};
				transform: scale(${params.start || 0.95 + (1 - (params.start || 0.95)) * t});
			`
		};
	}
</script>

<div class="lg:w-[500px] md:w-[300px] my-auto text-sm mt-[150px] sm:w-[200px] flex float-left p-6 font-arial">
	<a href={link} class="no-underline hover:no-underline">
		<div 
			class="bg-white rounded shadow p-4 flex items-start transform hover:shadow-[0px_3px_7px_0px_#2d63c2] transition-transform duration-300 hover:scale-105"
			in:fadeAndScale={{ duration: 800, start: 0.95, delay: 200 }}
		>
			<!-- Left: Image -->
			<img 
				src={image} 
				class="h-32 w-32 rounded mr-4" 
				alt="" 
				in:scale={{ duration: 300, start: 0.95, delay: 300 }}
			/>
			
			<!-- Right: Content -->
			<div class="flex flex-col justify-start text-center flex-1">
				<div class="font-bold text-xl text-gray-800" in:fade={{ delay: 400 }}>
					{content1}
				</div>
				<p class="text-gray-800 text-base mt-2" in:fade={{ delay: 600 }}>
					{content2}
				</p>
			</div>
		</div>
	</a>
</div>
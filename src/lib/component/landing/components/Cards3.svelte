<script lang="ts">
	export let content1: string = 'Default content';
	export let image: string = 'Default content';
	export let content2: string = 'Default content';
	export let link: string = '#';
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

<style>
	.card {
		width: 100%; /* Full width of the container */
		max-width: 300px; /* Set a max width for the card */
		background-color: white; /* Background color */
		border-radius: 8px; /* Rounded corners */
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
		overflow: hidden; /* Prevent overflow */
		transition: transform 0.3s; /* Smooth scaling on hover */
	}

	.card:hover {
		transform: scale(1.05); /* Scale up on hover */
	}

	.card-content {
		padding: 16px; /* Padding for content */
		display: flex; /* Flexbox for alignment */
	}

	.card-image {
		height: 64px; /* Fixed height for the image */
		width: 64px; /* Fixed width for the image */
		border-radius: 8px; /* Rounded corners for the image */
		margin-right: 16px; /* Space between image and text */
	}

	.card-text {
		flex: 1; /* Allow text to take remaining space */
	}

	.card-title {
		font-weight: bold; /* Bold title */
		font-size: 1.25rem; /* Font size for title */
		color: #333; /* Dark text color */
	}

	.card-description {
		color: #666; /* Lighter text color for description */
		font-size: 1rem; /* Font size for description */
		margin-top: 4px; /* Space above description */
	}
</style>

<div class="card" in:fadeAndScale={{ duration: 800, start: 0.95, delay: 200 }}>
	<a href={link} class="no-underline hover:no-underline">
		<div class="card-content">
			<!-- Left: Image -->
			<img src={image} class="card-image" alt={content1} in:scale={{ duration: 300, start: 0.95, delay: 300 }} />
			
			<!-- Right: Content -->
			<div class="card-text">
				<div class="card-title" in:fade={{ delay: 400 }}>
					{content1}
				</div>
				<p class="card-description" in:fade={{ delay: 600 }}>
					{content2}
				</p>
			</div>
		</div>
	</a>
</div>
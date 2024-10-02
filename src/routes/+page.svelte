<script lang="ts">
	import HeroImage from '$lib/components/heroImage.svelte';
	import img from '$lib/images/placeholder-hero.webp';
</script>

<div class="object-cover">
	<HeroImage image={img} alt="alt text" />
</div>
<div class="container mx-auto">
	<div class="flex flex-col mt-4">
		<h1 class="text-4xl font-bold text-bittersweet my-2">Welcome to RPG Architect</h1>
	</div>
</div>

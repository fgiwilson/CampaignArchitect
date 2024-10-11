<script lang="ts">
	import HeroImage from '$lib/components/heroImage.svelte';
	import placeholder from '$lib/images/placeholder-hero.webp';
	import type { PageServerData } from '../$types';
	export let data: PageServerData;
	let { campaigns } = data;
	let { theWorld } = data;
</script>

<HeroImage image={placeholder} alt="HERO" />
<div class="mx-auto container">
	<div class="flex flex-col mt-4">
		<h1 class="text-4xl font-medium text-bittersweet my-2 font-heading1">
			You Campaigns in:{theWorld.name}
		</h1>

		<section></section>
	</div>
</div>

<script lang="ts">
	import HeroImage from '$lib/components/heroImage.svelte';
	import placeholder from '$lib/images/placeholder-hero.webp';
	import type {PageServerData} from "../$types"
	
	export let data: PageServerData;
	let { theWorld } = data;
	
</script>

<HeroImage image={placeholder} alt="some alt text" />
<div class="mx-auto container">
	<div class="flex flex-col mt-4">
		<h1 class="text-4xl font-medium text-bittersweet my-2 font-heading1">{theWorld.name}</h1>
		<h3 class="text-2xl text-medium text-cadetGray">Description:</h3>
		<p class="mb-3 ml-1">{theWorld.mainDesc}</p>
		<h2 class="text-3xl font-semibold font-heading2">Campaigns in {theWorld.name}</h2>
		{#if theWorld.numCampaigns === 0}
			<p class="pt-2">Ther eare currently no campaigns for this world yet. Create a new one using the button below.</p>
			<a class="p-2 bg-lightBlue-300 hover:bg-lightBlue-700 text-lightBlue-800 hover:text-lightBlue-50 rounded-md w-fit mt-3" href="{theWorld._id}/campaigns/create">Create a New Campaign</a>
		{/if}
	</div>
</div>

<style>
</style>

<script lang="ts">
	import HeroImage from '$lib/components/heroImage.svelte';
	//@ts-expect-error - type not explicitely defined - using :any
	import Card from '$lib/components/card.svelte';
	import type { PageServerData } from '../$types';
	import placeholder from '$lib/images/placeholder-hero.webp';

	export let data: PageServerData;
	//@ts-expect-error - type not explicitely defined - using :any
	let { theWorld } = data;
	//@ts-expect-error - type not explicitely defined - using :any
	let { theCampaigns } = data;
</script>

<HeroImage image={placeholder} alt="some alt text" />
<div class="mx-auto container">
	<div class="flex flex-col mt-4">
		<h1 class="text-4xl font-medium text-bittersweet my-2 font-heading1">{theWorld.name}</h1>
		<h3 class="text-2xl text-medium text-cadetGray">Description:</h3>
		<p class="mb-3 ml-1">{theWorld.mainDesc}</p>
		<a
			href="{theWorld._id}/edit"
			class="p-2 bg-lightBlue-300 hover:bg-lightBlue-700 text-lightBlue-800 hover:text-lightBlue-50 rounded-md w-fit mt-3"
			>Edit World</a
		>
		<hr class="my-5" />
		<h2 class="text-3xl font-semibold font-heading2">Campaigns in {theWorld.name}</h2>
		{#if theWorld.numCampaigns === 0}
			<p class="pt-2">
				There are currently no campaigns for this world yet. Create a new one using the button
				below.
			</p>
		{:else}
			<ul class="flex li:items-end content-end flex-wrap">
				{#each theCampaigns as campaign}
					<li class="w-1/3">
						<Card
							title={campaign.name}
							link="{theWorld._id}/campaign/{campaign._id}"
							image={placeholder}
							desc={campaign.campaignDesc}
						/>
					</li>
				{/each}
			</ul>
		{/if}
		<div>
			<h2 class="text-3xl font-semibold font-heading2">Create new campaigns in this world</h2>
		</div>
		<a
			class="p-2 bg-lightBlue-300 hover:bg-lightBlue-700 text-lightBlue-800 hover:text-lightBlue-50 rounded-md w-fit mt-3"
			href="{theWorld._id}/campaigns/create">Create a New Campaign</a
		>
	</div>
</div>

<style>
</style>

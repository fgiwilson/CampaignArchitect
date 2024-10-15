<script lang="ts">
	import HeroImage from '$lib/components/heroImage.svelte';
	import heroWide from '$lib/images/placeholder-hero.webp'
	import type { PageServerData } from '../$types';
	export let data: PageServerData;
	//@ts-expect-error - type not explicitely defined - using :any
	let { theCampaign } = data;
	let { theWorld } = data;
</script>
<div>
	<HeroImage image= 'https://plus.unsplash.com/premium_vector-1725712789288-228ce009e654?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ' alt="some Alt"/>
</div>
<div class=" max-w-7xl mx-auto">
	<h1 class="text-4xl font-medium text-bittersweet my-2 font-heading1">
		{theCampaign.name} In <i>{theWorld.name}</i>
	</h1>
	<br />
	<h2 class="text-3xl font-semibold font-heading2">Campaign Details</h2>
	<h3>Description:</h3>
	<p>{theCampaign.campaignDesc}</p>
	<p>Sessions:</p>
</div>

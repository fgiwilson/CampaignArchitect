<!-- @migration-task Error while migrating Svelte code: Cannot use `export let` in runes mode — use `$props()` instead -->
<svelte:options runes={true} />
<script lang="ts">
	import HeroImage from '$lib/components/heroImage.svelte';
	import CampaignMenu from '$lib/components/campaignMenu.svelte';
	import type { PageServerData } from '../$types';
	export let data: PageServerData;
	//@ts-expect-error - type not explicitely defined - using :any
	let { theCampaign, theWorld } = data;
	import Button from '$lib/components/Button.svelte';
</script>

<div class="flex flex-col">
	<div class="">
		<HeroImage
			image="https://plus.unsplash.com/premium_vector-1725712789288-228ce009e654?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
			alt="some Alt"
		/>
	</div>
	<div class="flex">
		<CampaignMenu />
		<div class="max-w-7xl">
			<h1 class="text-4xl font-medium text-bittersweet my-2 font-heading1">
				{theCampaign.name} In <i>{theWorld.name}</i>
			</h1>
			<br />
			<h2 class="text-3xl font-semibold font-heading2">Campaign Details</h2>
			<h3>Description:</h3>
			<p>{theCampaign.campaignDesc}</p>
			<p>Sessions:</p>
			<div class="mt-2 p-4 border-2 rounded border-bittersweet-700 bg-bittersweet-200">
				<h4 class="mb-5 font-body text-xl font-semibold text-bittersweet-600 border-b-2">Danger Zone</h4>
				<Button btnLabel="Delete Campaign" btnType="anchor" btnStyle="danger" link="" />
			</div>
		</div>
	</div>

</div>

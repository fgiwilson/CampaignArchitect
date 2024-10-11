<script lang="ts">
	import type { PageServerData } from "../$types";
	export let data: PageServerData;
	//@ts-ignore
	let {theCampaign} = data;
	let {theWorld} = data;
</script>

<div>
	<h1 class="text-4xl font-medium text-bittersweet my-2 font-heading1">{theCampaign.name} In <i>{theWorld.name}</i></h1>
	<br />
	<h2 class="text-3xl font-semibold font-heading2">Campaign Details</h2>
	<h3>Description:</h3>
	<p>{theCampaign.campaignDesc}</p>
	<p>Sessions:</p>
</div>

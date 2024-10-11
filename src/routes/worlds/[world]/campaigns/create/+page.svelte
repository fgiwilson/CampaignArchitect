<script lang="ts">
	import HeroImage from '$lib/components/heroImage.svelte';
	import placeholder from '$lib/images/placeholder-hero.webp';
</script>

<HeroImage image={placeholder} alt="Hero Image" />
<div class="container mx-auto">
	<h1 class="text-4xl font-medium text-bittersweet my-2 font-heading1">Create a Campaign</h1>
	<p>
		Fill in the basic details of the your campaign. Start with a name (all of these details can be
		changed later)
	</p>
	<form action="?/create" method="POST" class="flex flex-col w-96 mt-4">
		<div class="m-1">
			<div><label for="campaignName" class="font-bold mb-1">Campaign Name:</label></div>
			<input
				id="campaignName"
				name="campaignName"
				type="text"
				placeholder="Enter a name for your Campaign"
				class="form-input mb-1 p-1 rounded-md selection:border-lightBlue-400 border-paynesGray-500 border-2 text-Gray-700 font-semibold"
			/>
		</div>
		<div class="m-1">
			<div><label class="mb-1 font-bold" for="campaignDesc">World Description:</label></div>
			<textarea
				rows="5"
				cols="50"
				name="cammpaignDesc"
				id="campaignDesc"
				class="form-textarea p-1 rounded text-gray-700 font-semibold focus:border-paynesGray-400"
			></textarea>
		</div>
		<button
			class="p-1 border border-r-cadetGray hover:bg-lightBlue hover:cursor-pointer mt-2"
			type="submit">Create</button
		>
	</form>
</div>

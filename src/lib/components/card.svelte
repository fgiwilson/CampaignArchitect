<script lang="ts">
	import Button from './Button.svelte';
	let {
		image = '', 
		title = 'Title', 
		imageAlt = 'defaultAlt', 
		desc = 'Placeholder Description - Default Text', 
		url = ''
		}: {image:string; title:string; imageAlt:string; desc:string; url:string; } = $props();
</script>

<div
	class="flex flex-col bg-white rounded m-3 shadow-md border-lightBlue-100 border-1 shadow-lightBlue-200"
>
	<div class="p-1 min-h-36">
		<div class="w-full">
			<img src={image} alt={imageAlt} />
		</div>
		<div class="p-2">
			<div class="border-b-2">
				{#if url =''}
					<h3 class="text-2xl text-bold text-paynesGray">{title}</h3>
				{:else}
					<a href={url}><h3 class="text-2xl font-semibold text-paynesGray hover:text-cadetGray">{title}</h3></a>
				{/if}
			</div>
			<div class="p-1 my-4">
				<p class="mb-2">{desc}</p>
			</div>
			<div class="my-2">
				<Button btnLabel="Got to {title}" btnType="anchor" btnStyle="secondary" link={url} />
			</div>
		</div>
	</div>
</div>

<style>
</style>

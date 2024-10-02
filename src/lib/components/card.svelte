<script lang="ts">
	interface cardProps {
		title: string;
		imageAlt?: string;
		desc: string;
		image?: string;
		link?: string;
	}

	let {
		image = '',
		title = 'Title',
		imageAlt = 'defaultAlt',
		desc = 'Six pounders run a rig bilge water Sail ho heave to draft mizzenmast jury mast lookout reef. Six pounders transom coxswain barkadeer gally scurvy starboard bilged on her anchor to go on account take a caulk. Yellow Jack doubloon hornswaggle chantey carouser jib yo-ho-ho bilged on her anchor handsomely clap of thunder.',
		link = ''
	}: cardProps = $props();
</script>

<div class="flex flex-col bg-white rounded m-3 shadow-md border-lightBlue-100 border-1 shadow-lightBlue-200">
	<div class="p-1 min-h-36">
		<div class="w-full">
			<img src={image} alt={imageAlt} />
		</div>
		<div class="p-2">
			<div class="border-b-2">
				{#if { link } !== ''}
					<a href={link}
						><h3 class="text-xl font-bold text-paynesGray hover:text-cadetGray">{title}</h3></a
					>
				{:else if { link } === ''}
					<h3 class="text-xl text-bold text-paynesGray">{title}</h3>
				{/if}
			</div>
			<div class="p-1 my-4">
				<p class="mb-2">{desc}</p>
			</div>
			<div class="my-2">
				<a class="rounded py-3 px-4 bg-lightBlue-500 hover:bg-lightBlue-600 text-lightBlue-50" href={link}>Go to {title}</a>
			</div>
		</div>
	</div>
</div>

<style>
</style>

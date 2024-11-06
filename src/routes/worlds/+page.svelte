<script lang="ts">
	//import Card from "$lib/components/card.svelte";
	import HeroImage from '$lib/components/heroImage.svelte';
	import placeholder from '$lib/images/placeholder-hero.webp';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	let { foundWorlds } = data;
</script>

<div>
	<HeroImage image={placeholder} alt="some alt text" />
</div>
<div class="mx-auto max-w-7xl">
	<div class="flex flex-col mt-4">
		<h1 class="text-4xl font-medium text-bittersweet my-2 font-heading1">Your Worlds</h1>
		<section class="my-5">
			<h2 class="text-3xl font-semibold font-heading2">Open an existing world</h2>
			<div class="flex space-x-8 items-center mr-auto">
				<ul class="flex li:items-end content-end flex-wrap">
					{#each foundWorlds as myWorld}
						<div class="w-1/3">
							<li>
								<Card
									title={myWorld.name}
									imageAlt="Placeholder Alt"
									image={placeholder}
									desc={myWorld.mainDesc}
									url="/worlds/{myWorld._id}"
								/>
							</li>
						</div>
					{/each}
				</ul>
			</div>
		</section>
	</div>
	<div class="flex">
		<section class="flex-row">
			<h2 class="text-3xl font-semibold font-heading2 mb-5">Create a new world</h2>
			<Button btnLabel="Create new world" btnType="anchor" btnStyle="secondary" link="/worlds/create" />
		</section>
	</div>
</div>

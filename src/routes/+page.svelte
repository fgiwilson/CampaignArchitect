<script lang="ts">
	import HeroImage from '$lib/components/heroImage.svelte';
	import img from '$lib/images/placeholder-hero.webp';
	//@ts-expect-error - type not explicitely defined - using :any
	import Card from '$lib/components/Card.svelte';
</script>

<div class="object-cover">
	<HeroImage image={img} alt="alt text" />
</div>
<div class="max-w-7xl mx-auto">
	<div class="flex flex-col mt-4">
		<h1 class="text-4xl font-medium text-bittersweet my-2 font-heading1">
			Welcome to RPG Architect
		</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Possumusne ergo in vita summum bonum
			dicere, cum id ne in cena quidem posse videamur? Audio equidem philosophi vocem, Epicure, sed
			quid tibi dicendum sit oblitus es. In quibus doctissimi illi veteres inesse quiddam caeleste
			et divinum putaverunt. Duo Reges: constructio interrete.
		</p>

		<p>
			In qua si nihil est praeter rationem, sit in una virtute finis bonorum; Utinam quidem dicerent
			alium alio beatiorem! Iam ruinas videres.
		</p>

		<p>
			Ita multa dicunt, quae vix intellegam. Rationis enim perfectio est virtus; <b
				>Cui Tubuli nomen odio non est?</b
			>
			Indicant pueri, in quibus ut in speculis natura cernitur. <mark>Efficiens dici potest.</mark> Bonum
			integritas corporis: misera debilitas.
		</p>
	</div>
	<div class="flex flex-col">
		<div class="flex flex-row">
			<h2 class="font-heading2 text-3xl my-2 flex flex-auto">Features! We Have Those!</h2>
		</div>
		<div class="flex flex-wrap md:flex-nowrap w-full">
			<div class="flex-auto">
				<Card
					image={img}
					title="Feature 1"
					desc="Indicant pueri, in quibus ut in speculis natura cernitur. <mark>Efficiens dici potest.</mark> Bonum
			integritas corporis: misera debilitas."
				/>
			</div>
			<div class="flex-auto">
				<Card
					image={img}
					title="Feature 2"
					desc="Indicant pueri, in quibus ut in speculis natura cernitur. <mark>Efficiens dici potest.</mark> Bonum
			integritas corporis: misera debilitas."
				/>
			</div>
			<div class="flex-auto">
				<Card
					image={img}
					title="Feature 3"
					desc="Indicant pueri, in quibus ut in speculis natura cernitur. <mark>Efficiens dici potest.</mark> Bonum
			integritas corporis: misera debilitas."
				/>
			</div>
		</div>
	</div>
</div>

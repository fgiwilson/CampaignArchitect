<script>
	import RPGA_Logo from '$lib/images/RPGA_Logo.svg';
</script>

<div class="border-b-2 border-lightBlue w-full sticky top-0 z-40 max-h-36">
	<div class="max-w-7xl max-h-full mx-auto relative flex items-center">
		<div class="max-h-fit grid grid-flow-* grid-cols-2 grid-rows-1">
			<div class="flex col-span-2 items-center">
				<a href="/" aria-label="RPG Architect Home" class="pr-2">
					<img src={RPGA_Logo} alt="RPGA Architect Logos" class="w-auto h-10" />
				</a>
			</div>
		</div>
		<div class="relative md:flex items-center ml-auto">
			<nav class=" text-lg leading-6 font-semibold text-cadetGray dark:text-lightBlue">
				<div class="flex space-x-8">
					<ul class="flex li:items-end pt-4 content-end md:pt-0">
						<li class="md:p-4 py-2 block text-paynesGray hover:text-cadetGray px-4">
							<a href="/">Home</a>
						</li>
						<li class="md:p-4 py-2 block text-paynesGray hover:text-cadetGray px-4">
							<a href="/worlds/">Worlds</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
</div>

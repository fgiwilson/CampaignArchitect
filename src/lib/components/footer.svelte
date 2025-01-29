<script lang="ts">
	//let currentYear = new Date().getFullYear().toString();
	import RPGA_Logo from '$lib/images/RPGA_Logo.svg';
</script>

<div
	class="w-full bg-paynesGray p-3 grid grid-rows-2 grid-cols-4 grid-flow-* gap-1 items-center"
>
	<div id="logoBlock" class="block col-span-1">
		<img src={RPGA_Logo} alt="RPGA Logo" class="h-14" />
	</div>
	<div id="menuBlock" class="block col-span-3 items-center">
		<div><h3 class="text-lightBlue text-2xl font-semibold">Menu</h3></div>
		<ul class="h-auto">
			<li class=" text-cadetGray hover:text-lightBlue"><a class="p-1 block" href="/">Home</a></li>
			<li class=" text-cadetGray hover:text-lightBlue">
				<a class="p-1 block" href="/terms">Terms of Service</a>
			</li>
			<li class=" text-cadetGray hover:text-lightBlue">
				<a class="p-1 block" href="/about">About</a>
			</li>
			<li class=" text-cadetGray hover:text-lightBlue">
				<a class="p-1 block" href="/open-source">Open Source Licenses</a>
			</li>
		</ul>
	</div>
	<div id="copyrightBlock" class="flex col-span-4 mt-4 items-end">
		<p class="text-lightBlue">
			&copy; RPG Architect, Formative Games - 2024 - All Rights Reserved.
		</p>
	</div>
</div>

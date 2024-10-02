<script lang="ts">
    let currentYear = new Date().getFullYear().toString();
</script>

<div class="w-full bg-paynesGray p-3 mt-5 grid grid-rows-2 grid-cols-4 grid-flow-* gap-1">
	<div id="logoBlock" class="block col-span-1"><h3 class=" text-lightBlue text-2xl">RPG ARCHITECT</h3></div>
	<div id="menuBlock" class="block col-span-3">
		<div><h3 class="text-lightBlue text-2xl">Menu</h3></div>
		<ul class="h-auto">
			<li class=" text-cadetGray hover:text-lightBlue"><a class="p-1 block" href="/">Home</a></li>
			<li class=" text-cadetGray hover:text-lightBlue"><a class="p-1 block" href="/terms">Terms of Service</a></li>
			<li class=" text-cadetGray hover:text-lightBlue"><a class="p-1 block" href="/about">About</a></li>
            <li class=" text-cadetGray hover:text-lightBlue"><a class="p-1 block" href="/open-source">Open Source Licenses</a></li>
		</ul>
	</div>
    <div id="copyrightBlock" class="col-span-4 mt-4">
        <p class="text-lightBlue">&copy; RPG Architect, Formative Games - 2024 - All Rights Reserved.</p>
    </div>
</div>


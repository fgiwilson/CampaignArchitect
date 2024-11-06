<script lang="ts">
	import type { PageServerData } from '../$types';

	export let data: PageServerData;
	//@ts-expect-error - type not explicitely defined - using :any
	const { world } = data;
</script>

<div class=" max-w-7xl mx-auto">
	<h1 class="text-4xl font-medium text-bittersweet my-2 font-heading1">Editing: {world.name}</h1>
	<form action="?/edit" class="flex flex-col w-96 mt-4" method="post">
		<label class="font-bold mb-1" for="worldName">World name: </label>
		<input id="worldName" name="worldName" type="text" class="mb-4" placeholder={world.name} />
		<label class="font-bold mb-1" for="worldDesc">World Description: </label>
		<textarea id="worldDesc" name="worldDesc" class="mb-4">{world.mainDesc}</textarea>
		<button
			class="p-2 mt-5 bg-lightBlue hover:bg-cadetGray hover:text-lightBlue rounded"
			type="submit">Save Changes</button
		>
	</form>
	<hr class="my-5" />
	<form action="?/delete" method="POST">
		<button type="submit" class="p-2 rounded bg-flame-800 text-lightBlue-100 hover:bg-flame-600"
			>Delte World</button
		>
	</form>
</div>

<style>
</style>

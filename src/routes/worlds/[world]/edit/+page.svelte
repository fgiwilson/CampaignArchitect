<script lang="ts">
	import type { PageServerData } from '../$types';

	export let data: PageServerData;
	//@ts-ignore
	const { world } = data;
</script>

<div class="container mx-auto">
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
</div>

<style>
</style>
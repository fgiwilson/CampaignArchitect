<script lang="ts">
    import HeroImage from "$lib/components/heroImage.svelte";
    import placeholder from "$lib/images/placeholder-hero.webp";

</script>
<HeroImage image={placeholder} alt="Hero Image"/>
<div class="container mx-auto">
    <h1 class="text-4xl font-bold text-bittersweet my-2">Create a new World</h1>
    <p>Fill in the basic details of the your world. Start with a name (all of these details can be changed later)</p>
    <form action="?/create" method="POST" class="flex flex-col w-96 mt-4">
        <div class="m-1">
            <div><label for="worldName"  class="font-bold mb-1">World Name:</label></div>
            <input id="worldName" name="worldName" type="text" placeholder="Enter a name for your world" class="mb-1 p-1">
        </div>
        <div class="m-1">
            <div><label  class="mb-1 font-bold" for="worldDesc">World Description:</label></div>
            <textarea rows="5" cols="50" name="worldDesc" id="worldDesc" class="p-1 rounded"></textarea>
        </div>
        <button class="p-1 border border-r-cadetGray hover:bg-lightBlue hover:cursor-pointer mt-2" type="submit">Create</button>
    </form>
</div>

<h1>Create a new World</h1>
<p>Fill in the basic details of the your world. Start with a name (all of these details can be changed later)</p>
<form action="?/create" method="POST" class="flex flex-col w-96">
    <label for="worldName"  class=" mb-1">World Name:</label>
    <input id="worldName" name="worldName" type="text" placeholder="Enter a name for your world" class="mb-1">

    <input class="p-1 border border-r-cadetGray hover:bg-lightBlue hover:cursor-pointer" type="submit">
</form>
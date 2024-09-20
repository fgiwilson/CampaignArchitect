<script lang="ts">
    import "../app.css";
    import Nav from "$lib/components/nav.svelte";
</script>
<div class="grid grid-rows-3">
    <div class="grid grid-cols-2 w-full">
        <Nav />
    </div>
    <div class="p-5 w-full">
        <slot />
    </div>
</div>


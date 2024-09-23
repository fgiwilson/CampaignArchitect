<script lang="ts">
    import "../app.css";
    import Nav from "$lib/components/nav.svelte";
</script>
<div class="container">
    <div class="flex">
        <Nav />
    </div>
    <div class="p-5">
        <slot />
    </div>
</div>
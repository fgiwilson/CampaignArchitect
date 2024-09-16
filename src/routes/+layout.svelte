<script lang="ts">
    import "../app.css";
    import Nav from "$lib/components/nav.svelte";
</script>
<Nav />
<div class="flex flex-auto p-5">
    <slot />
</div>
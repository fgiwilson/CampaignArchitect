<script>
    import HeroImage from "$lib/components/heroImage.svelte";
    import image from "$lib/images/hero_wide.jpg"
    const imgDetails = {
        image:image,
        alt: "alt text",
    };

</script>
<div class="object-cover">
    <HeroImage {...imgDetails}/>
</div>
<div class="container mx-auto">
    <h1 class="text-3xl font-bold underline">Welcome to RPG Architect</h1>
</div>


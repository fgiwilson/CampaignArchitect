<script lang="ts">
    export const image: string ='';
    export const title: string = 'Title';
    export const imageAlt: string = 'defaultAlt';
    export const desc: string = 'lorem ipsum';
</script>

<div class="container-sm">
    <div>
        <img src="{image}" alt="{imageAlt}">
    </div>
    <div>
        <h3>{title}</h3>
    </div>
    <div>
        <p>{desc}</p>
    </div>
</div>
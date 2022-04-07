<script>
    export let id, text, completed;
</script>

<div class="item">
    <input class="text-input" type="text" bind:value={text} readonly={completed}/>
</div>

<style>

</style>

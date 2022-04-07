<script>
    import { onMount } from "svelte";
    import { items } from "../stores";
    import ToDoAPI from "../ToDoAPI";

    function handleNewItem(e) {

    }

    function handleUpdate(e) {

    }

    function handleDelete(e) {

    }

    onMount(async () => {
        $items = await ToDoAPI.getAll();
    });
</script>

<div class="list">
    {#each $items as item (item)}
    {/each}
</div>

<style>

</style>

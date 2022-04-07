<script>
    import { onMount } from "svelte";
    import { items } from "../stores";
    import ToDoAPI from "../ToDoAPI";
    import Item from "./Item.svelte";

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
        <Item {...item} />
        {:else}
        <p class="list-status">There is no item in the list</p>
    {/each}
</div>

<style>
    .list {
        padding: 15px;
    }

    .list-status {
        margin: 0;
        text-align: center;
        color: #ffffff;
        font-weight: bold;
        font-size: 1.1em;
    }
</style>

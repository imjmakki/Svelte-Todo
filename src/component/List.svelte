<script>
    import { onMount } from "svelte";
    import { items } from "../stores";
    import ToDoAPI from "../ToDoAPI";
    import Item from "./Item.svelte";
    import NewItem from "./NewItem.svelte";

    function handleNewItem(e) {
    }

    function handleUpdate(e) {
        const index = $items.findIndex(item => item.id === e.detail.id);
        $items[index] = e.detail;
        ToDoAPI.save($items);
    }

    function handleDelete(e) {
        $items = $items.filter(item => item.id !== e.detail);
        ToDoAPI.save($items);
    }

    onMount(async () => {
        $items = await ToDoAPI.getAll();
    });
</script>

<div class="list">
    <NewItem on:newItem={handleNewItem} />
    {#each $items as item (item)}
        <Item {...item} on:updaate={handleUpdate} on:delete={handleDelete} />
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

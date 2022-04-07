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

<style>

</style>

<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let value = "";
    function handeKeyUp({key}) {
        if (key !== "Enter" || value.length === 0) return;
    }
</script>

<input type="tel" on:keyup={handeKeyUp} bind:value placeholder="Add Item" />

<style>

</style>

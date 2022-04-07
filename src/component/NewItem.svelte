<script>
    function handeKeyUp({key}) {
        if (key !== "Enter" || value.length === 0) return;
    }

    let value = "";
</script>

<input type="tel" on:keyup={handeKeyUp} bind:value placeholder="Add Item" />

<style>

</style>

<script>
    export let id, text, completed;
</script>

<div class="item">
    <input class="text-input" type="text" bind:value={text} readonly={completed}/>
    <input class="completed-checkbox" type="checkbox" bind:checked={completed} />
</div>

<style>
    .item {
        display: flex;
        align-items: center;
        padding: 15px;
        background: #ffffff;
    }
    .item:focus-within {
        background: rgba(255, 255, 255, 0.0);
    }
    .text-input {
        flex-grow: 1;
    }
</style>

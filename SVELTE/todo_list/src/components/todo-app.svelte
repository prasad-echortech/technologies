<script>
    let toDoList = [];
    let textInput = "";
    function addToDo() {
        toDoList = [
            ...toDoList,
            { content: textInput, editing: false, checked: false },
        ];
        textInput = "";
    }
    function setEditing(i, isEditing) {
        toDoList[i].editing = isEditing;
    }
    function deleteTodo(i) {
        toDoList.splice(i, 1);
        toDoList = toDoList;
    }
</script>

<div style="margin:0 auto;padding:10px;width:400px">
    <h1 style="text-align:center;">ToDo-list</h1>
    <p>Enter Your ToDo Here!</p>
    <div style="display:flex">
        <input type="text" bind:value={textInput} />
        <button on:click={addToDo}>Add</button>
    </div>
</div>

{#each toDoList as toDo, i}
    <div style="display:flex; align-items:baseline;margin:0 auto; width:400px;">
        {#if toDo.editing}
            <input type="text" bind:value={toDo.content} />
        {:else}
            <input type="checkbox" bind:checked={toDo.checked} />
            <h4 style="flex-grow: 1">{toDo.content}</h4>
        {/if}
        <div>
            {#if toDo.editing}
                <button on:click={() => setEditing(i, false)}>Save</button>
            {:else}
                <button on:click={() => setEditing(i, true)}>Edit</button>
            {/if}
            <button on:click={() => deleteTodo(i)}>Delete</button>
        </div>
    </div>
{/each}

<style>
</style>

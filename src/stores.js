import { writable } from "svelte/store";

export const items = writable([
    {
        id: 1,
        text: "Take out the practice",
        completed: false
    },
    {
        id: 2,
        text: "Finish up the project",
        completed: true

    }
]);

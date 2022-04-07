export default class ToDoAPI {
    static async getAll() {
        return JSON.parse(localStorage.getItem("todo-list") || "[]");
    }

    static async save(items) {
        localStorage.setItem("todo-list", JSON.stringify(items));
    }
}

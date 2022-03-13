export interface Todo {
    content: string;    // save a content of a todo
    completed: boolean; // has the todo(task) already done ?
    notModified: boolean; // has the todo(task) content been modified ?
}
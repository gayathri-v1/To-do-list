//create an object using class constructor
export class Todo{
    constructor(title,desc,duedate,priority,subTaskArray){
        this.title=title;
        this.desc=desc;
        this.duedate=duedate;
        this.priority=priority;
        this.subTaskArray=subTaskArray;
    }
}
export class Project{
    constructor(titleProj){
        this.titleProj=titleProj;
        this.todos = []; // Array to hold todo objects
    }

    // Method to add a todo to the project
    addTodo(todo) {
        this.todos.push(todo);
    }

    // Method to remove a todo (based on the todo's title for example)
    removeTodo(todoTitle) {
        this.todos = this.todos.filter(todo => todo.title !== todoTitle);
    }

    // Method to get all todos
    getTodos() {
        return this.todos;
    }
}








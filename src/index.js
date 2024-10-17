export class Project {
    static allProjects = [];
    constructor(id,name) {
        this.id=id;
        this.name = name;
        this.tasks = [];
        Project.allProjects.push(this);
    }

    addTask(task) {
        if (task instanceof Task) {
            this.tasks.push(task);
        } else {
            throw new Error("Can only add Task objects to a Project");
        }
    }

    removeTask(taskId) {
        const index = this.tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }
    static removeProject(projectId){
        const index= this.allProjects.findIndex(project=>project.id === projectId)
        if(index !== -1){
            this.allProjects.splice(index, 1);
            
        }
    }
}

class Task {
    constructor(id, name, description, dueDate,priority) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.steps = [];
        this.completed = false;
    }

    addStep(step) {
        if (step instanceof Step) {
            this.steps.push(step);
        } else {
            throw new Error("Can only add Step objects to a Task");
        }
    }

    removeStep(stepId) {
        const index = this.steps.findIndex(step => step.id === stepId);
        if (index !== -1) {
            this.steps.splice(index, 1);
        }
    }

    markAsCompleted() {
        this.completed = true;
    }

    markAsIncomplete() {
        this.completed = false;
    }
}

class Step {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.completed = false;
    }

    markAsCompleted() {
        this.completed = true;
    }

    markAsIncomplete() {
        this.completed = false;
    }
}

// Example usage
// const project1 = new Project("Project 1", "Description 1");
// const task1 = new Task(1, "Task 1", "Description 1", "2024-01-01","p4");
// const step1 = new Step(1, "Step 1", "Description 1");
// const step12 = new Step(2, "Step 2", "Description 2");
// const step13 = new Step(3, "Step 3", "Description 3");



// project1.addTask(task1);
// task1.addStep(step1);
// task1.addStep(step12);
// task1.addStep(step13);


// console.log(project1);

// const project2  = new Project("Project 2", "Description 2","p2");
// const task2 = new Task(2, "Task 2", "Description 2", "2024-01-01");
// const step2 = new Step(2, "Step 2", "Description 2");

// project2.addTask(task2);
// task2.addStep(step2);

// console.log(project2);



// console.log(Project.allProjects);

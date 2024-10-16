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
export function addProject(title, tasks) {
    const newProject = {
      title: title,
      taskArray: tasks
    };
    projArray.push(newProject);
    console.log(projArray);  // Add the new project to projArray
    renderProjects();  // Re-render the list to show the new project
  }








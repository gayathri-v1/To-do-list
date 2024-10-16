
// //this should be called once you submit the task button
export function renderTask(taskArray){
   
    const table=document.querySelector('table');

    if (taskArray.length > 0) {
        const lastTask = taskArray[taskArray.length - 1]; // Get the last task
        const tr = document.createElement('tr');
    
        for (let key in lastTask) {
            const td = document.createElement('td');
            // Check if the key is 'subtaskArray' (assuming the array is stored with this key)
        if (key === 'subtaskArray'&& Array.isArray(lastTask[key])) {
            // Create a div to hold the subtasks checkboxes
            const subtaskDiv = document.createElement('div');
            
            // Loop through each subtask in the array and create a checkbox
            lastTask[key].forEach((subtask) => {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = subtask;
                checkbox.name = subtask;
                // Label for the checkbox
                const label = document.createElement('label');
                // label.htmlFor = subtask;
                label.textContent = subtask;

                // Append checkbox and label to the div
                subtaskDiv.appendChild(checkbox);
                subtaskDiv.appendChild(label);
                subtaskDiv.appendChild(document.createElement('br')); // Add line break for neatness
            });
            td.appendChild(subtaskDiv); // Append the div to the cell
        } else {
            td.textContent = lastTask[key];  // Handle other properties normally
        } 
            tr.append(td);
        }
    
    
//action button
      const actionTd = document.createElement('td');
      const doneButton = document.createElement('button');
      doneButton.textContent = 'Done';
      doneButton.classList.add("done");
      actionTd.append(doneButton);
      tr.append(actionTd);
      table.append(tr);
      doneButton.addEventListener('click',()=>{
          tr.style.border="thick solid green";
        

      })
}; 
    
};
    
    // Function to render projects and tasks
function renderProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';  // Clear previous list
    projArray.forEach((project, index) => {
      const projectItem = document.createElement('div');
      projectItem.innerHTML = `
        <h3>${project.title}</h3>
        <ul>
          ${project.taskArray.map(task => `<li>${task}</li>`).join('')}
        </ul>
        <button onclick="deleteProject(${index})">Delete</button>
      `;
      projectList.appendChild(projectItem);
    });
  }
  
  // Initial rendering of projects
  renderProjects();
  
    
    
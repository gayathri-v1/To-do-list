import {Project} from './index';
import "./styles.css";
// export {toggleContainer};
const addProject = document.querySelector(".addProject");
const projectDiv = document.querySelector(".projectDiv");
const inputProject = document.querySelector(".createProject");
// 
toggleContainer(inputProject);//none

addProject.addEventListener("click", () => {
    toggleContainer(inputProject);//flex
});

  const check = document.querySelector(".check");
  let id=1;  
  check.addEventListener("click", () => {
    const titleValue = document.querySelector("#project").value;
    if(titleValue.trim()){
    renderProject(titleValue,id);
    const project1 = new Project(id,titleValue);
    console.log(project1);

}
id++;

    toggleContainer(inputProject);//none
    document.querySelector("#project").value = "";
  });

function renderProject(value,id) {
    
  const div = document.createElement("div");
  const button = document.createElement("button");
    div.className='projectBtn';
  const projectName = document.createElement("p");
  projectName.textContent = value;
  const delBtn = document.createElement("button");
  const icon= document.createElement('span');
  icon.className="material-symbols-outlined"
  icon.textContent='delete_forever';
  
delBtn.addEventListener('click',()=>{
    deleteProject(id);
    // console.log(id);
  projectDiv.removeChild(div);

})

  delBtn.appendChild(icon);
  button.appendChild(delBtn);
  button.appendChild(projectName);
 
  div.appendChild(button);
  projectDiv.appendChild(div);
}

function toggleContainer(div) {
  if (div.style.display === 'none') {
    div.style.display = 'flex';
  } else {
    div.style.display = 'none';
  }
}

function deleteProject(id){
  Project.removeProject(id);
console.log(Project.allProjects);

}

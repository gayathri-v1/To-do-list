// import { toggleContainer } from "./project.js";
// import "./styles.css";
// import {Project} from './index';

const taskDiv = document.querySelector(".task");
const addTaskBtn = document.querySelector(".addTask");
toggleContainer(taskDiv);
addTaskBtn.addEventListener("click", () => {
    
  toggleContainer(taskDiv);
});

const addStep = document.querySelector(".addStep");
const step = document.querySelector(".step");
toggleContainer(step);

addStep.addEventListener("click", () => {
  toggleContainer(step);
  getSteps();
  
});

const submitBtn = document.querySelector(".submit");
const closeBtn = document.querySelector(".close");

submitBtn.addEventListener("click", () => {
  const inputTitle = document.querySelector("#title").value;
  const inputDate = document.querySelector("#duedate").value;
  const inputNote = document.querySelector("#notes").value;
  const inputPriority = document.querySelector("#priorityOptions").value;
  const stepAr = getSteps();//collect the steps
  if (inputTitle.trim()) {
    renderDiv(inputTitle, inputDate, inputNote, inputPriority, stepAr);
  }
  clearEntries();
  stepArray.length = 0; // Reset stepArray
});

closeBtn.addEventListener("click", () => {
  clearEntries();
  hide(step);
});
let checkId=0;
function renderDiv(inputTitle, inputDate, inputNote, inputPriority, stepAr) {
  checkId++;
  const renderTask = document.querySelector(".renderTask");
  const div = document.createElement("div");
  div.className = "renderDiv";
  renderTask.appendChild(div);
  div.innerHTML = `
        <div class="done">
        <input type="checkbox" id="${checkId}" class="mycheck">
        </div>

        <div class="taskDiv">
        <div class="taskHeader"><p class="title"></p>
        <p class="date"></p></div>
        <p class="priority"></p>
        <p class="note"></p>
        <div class="renderStepDiv">
        <p>Sub Tasks:</p>
        <div class="renderDynamicSubTask"></div>
        </div>
        </div>

        <div class="delete">
        <button><span class="material-symbols-outlined">
            delete
            </span></button>
        </div>

    `;
    //assign values to created divs
  div.querySelector(".title").textContent = inputTitle;
  div.querySelector(".date").textContent = "Due on: " + inputDate;
  div.querySelector(".note").textContent = "Notes: " + inputNote;
  div.querySelector(".priority").textContent = "Priority: " + inputPriority;

  let uniqueId = 0;
  stepAr.forEach((stepValue) => {
    uniqueId++;
    const subTaskDiv = document.createElement("div");
    subTaskDiv.className='subtask';
    subTaskDiv.innerHTML = `
            <input type="checkbox" id="checkbox-${uniqueId}" class="subCheck">
            <p class="stepValue"></p>
        `;
        const subCheck = subTaskDiv.querySelector(".subCheck");
        const subTaskText=subTaskDiv.querySelector(".stepValue");
        subTaskText.textContent = stepValue;

        //add eventlistener to subcheck
        subCheck.addEventListener("click", () => {
          if (subCheck.checked) {
            subTaskText.style.textDecorationLine = 'line-through';
          } else {
            subTaskText.style.textDecorationLine = 'none';
          }
        });

        div.querySelector(".renderDynamicSubTask").appendChild(subTaskDiv);

  });
  //Add event listeners for task completion and delete functionality
  div.querySelector(".mycheck").addEventListener("click", () => {
    if(div.querySelector(".mycheck").checked){
    div.style.border = "3px solid #058627";
    div.style.filter= "blur(1px)";}
    else{
      div.style.border = "3px solid brown";
      div.style.filter= "none";
    }
  });

  div.querySelector(".delete").addEventListener("click", () => {
    renderTask.removeChild(div);
  });

}
const stepArray=[];
function getSteps() {
  const stepCheckBtn = document.querySelector(".stepCheck");
  const stepDiv = document.querySelector(".stepDiv");
  if (!stepCheckBtn.hasListener){
  stepCheckBtn.addEventListener("click", () => {
    //add p in stepDiv
    const stepTitle = document.querySelector("#step").value;
    const subtask = document.createElement("p");
    if (stepTitle.trim()) {
      subtask.textContent = stepTitle;
      stepDiv.appendChild(subtask);
      //collect value in step array
      stepArray.push(stepTitle);
      
    }
    document.querySelector("#step").value = "";
    hide(step);
  });
  stepCheckBtn.hasListener = true; 
  }
  return stepArray;
}

function clearSteps() {
  document.querySelector(".stepDiv").innerHTML = "";
}

function clearEntries() {
  document.querySelector("#title").value = "";
  document.querySelector("#duedate").value = "";
  document.querySelector("#notes").value = "";
  document.querySelector("#priorityOptions").value = "";
  document.querySelector("#step").value = "";
  clearSteps();
  toggleContainer(taskDiv);
}
function toggleContainer(div) {
  if (div.style.display === "none") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
}
function hide(div) {
  div.style.display = "none";
}

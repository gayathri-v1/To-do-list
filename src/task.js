// import { toggleContainer } from "./project.js";
// import "./styles.css";

const taskDiv= document.querySelector('.task');
const addTaskBtn= document.querySelector('.addTask');
toggleContainer(taskDiv);
addTaskBtn.addEventListener('click',()=>{
    toggleContainer(taskDiv);
})

const addStep= document.querySelector('.addStep');
const step= document.querySelector('.step');
toggleContainer(step);

addStep.addEventListener('click',()=>{
    toggleContainer(step);
    getSteps();
    

})

const submitBtn=document.querySelector('.submit');
const closeBtn=document.querySelector('.close');

submitBtn.addEventListener('click',()=>{
    const inputTitle=document.querySelector('#title').value;
    const inputDate=document.querySelector('#duedate').value;
    const inputNote=document.querySelector('#notes').value;
    const inputPriority=document.querySelector('#priorityOptions').value;
    if(inputTitle.trim()){
    renderDiv(inputTitle,inputDate,inputNote,inputPriority,getSteps());}
    clearEntries();
    clearSteps();
   
})

closeBtn.addEventListener('click',()=>{
    clearEntries();
})

function renderDiv(inputTitle,inputDate,inputNote,inputPriority,steparray){
    const renderTask= document.querySelector('.renderTask');
    const div= document.createElement('div');
    div.className='renderDiv';
    renderTask.appendChild(div);
    div.innerHTML=`
        
        <div>
        <div class="taskHeader">
        <input type="checkbox" id="mycheck">
        <p class="title"></p>
        <p class="date"></p>
        </div>
        <p class="priority"></p>
        <p class="note"></p>
        <button class="steps">See Steps</button>
        </div>

    `;
    div.querySelector('.title').textContent=inputTitle;
    div.querySelector('.date').textContent="Due on: " +inputDate;
    div.querySelector('.note').textContent="Notes: "+inputNote;
    div.querySelector('.priority').textContent="Priority: "+inputPriority;
    div.querySelector('.steps').addEventListener('click',()=>{
        renderSteps(steparray);
    })
};
const stepArray=[];
function getSteps(){
    const stepCheckBtn= document.querySelector('.stepCheck');
    const stepDiv= document.querySelector('.stepDiv');
    stepCheckBtn.addEventListener('click',()=>{
        const stepTitle= document.querySelector('#step').value;
        const subtask= document.createElement('p');
        subtask.textContent=stepTitle;
        stepDiv.appendChild(subtask);
        stepArray.push(stepTitle);
        document.querySelector('#step').value='';
        
    })
    return stepArray;
}
function renderSteps(stepArray){
    stepArray.forEach(stepValue => {
        const div= document.createElement('div');
        div.innerHTML=`
            <input type="checkbox">
            <p class="stepValue"></p>
        `;
           div.querySelector('.stepValue').textContent=stepValue; 
       
    });
}
function clearSteps(stepDiv,subtask){
    stepDiv.removeChild(subtask);

}









function clearEntries(){
document.querySelector('#title').value='';
    document.querySelector('#duedate').value='';
    document.querySelector('#notes').value='';
    document.querySelector('#priorityOptions').value='';

    toggleContainer(taskDiv);

}
function toggleContainer(div) {
    if (div.style.display === 'none') {
      div.style.display = 'flex';
    } else {
      div.style.display = 'none';
    }
  }

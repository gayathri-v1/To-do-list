import './style.css';
import {subTask, array,deleteAll} from "./subTask";
import { Todo  } from './logic';
import { addProj,content1,addProject } from '../content1';

addProj();
// addProject.addEventListener('click',addProj);

const content= document.querySelector('.content2');
const addTaskBtn= document.querySelector('.addTask');

addTaskBtn.addEventListener('click',function(){
    if(content.style.display==='none'){
        content.style.display="flex";}
        
});
// content.appendChild(close);
// title
const title =document.createElement('label');
title.textContent="Title:";
const inputTitle=document.createElement('input');
inputTitle.type='text';
title.appendChild(inputTitle);

//description
const desc= document.createElement('label');
desc.textContent='Description:';
const inputDesc= document.createElement('textarea');
inputDesc.rows=5;
inputDesc.cols=30;
inputDesc.placeholder="Give some description"
// desc.appendChild(inputDesc);

//duedate
const duedate= document.createElement('label');
duedate.textContent='Due date:';
const inputDueDate=document.createElement('input');
inputDueDate.type='date';
duedate.appendChild(inputDueDate);
//priority
const priority= document.createElement('label');
priority.textContent='Priority:'
    const priorityValArr= ['Low','Medium','High'];
    const selectList = document.createElement("select");
    priority.appendChild(selectList);
    for (let i = 0; i < priorityValArr.length; i++) {
        const option = document.createElement("option");
        option.value = priorityValArr[i];
        option.text = priorityValArr[i];
        selectList.appendChild(option);
    }




//notes
const notes= document.createElement('label');
notes.textContent='Notes:';
const inputNotes= document.createElement('textarea');
inputNotes.rows=5;
inputNotes.cols=30;
inputNotes.placeholder="Write Notes"
// inputNotes.type='text';
notes.appendChild(inputNotes);

//submit button
const btn= document.createElement('div');
btn.className='btn';
const submit= document.createElement('button');
submit.textContent="Confirm";
btn.appendChild(submit);
//add eventlistener
submit.addEventListener('click',()=>{
    const valueTitle=inputTitle.value;
    const valueDesc= inputDesc.value;
    const valueDueDate=inputDueDate.value;
    const valuePriority=selectList.value;
    const valueNotes= inputNotes.value;
    
    const obj= new Todo(valueTitle,valueDesc,valueDueDate,valuePriority,valueNotes,array);
    console.log(obj);
    clear();
    deleteAll();
})
const cancel= document.createElement('button');
cancel.textContent="Cancel";
btn.appendChild(cancel)
//add eventlistener
cancel.addEventListener('click',clear)
function clear(){
    inputTitle.value="";
    inputDesc.value="";
    inputDueDate.value="";
    inputNotes.value="";
    deleteAll();
    
}

content.appendChild(title);
content.appendChild(desc);
content.appendChild(inputDesc);
content.appendChild(duedate);
content.appendChild(priority);
content.appendChild(notes);
content.appendChild(inputNotes)
content.appendChild(subTask());
content.appendChild(btn);






import {subTask} from "./subTask";
// title
const title =document.createElement('label');
title.textContent="Title:";
const inputTitle=document.createElement('input');
inputTitle.type='text';
const valueTitle=inputTitle.value;
title.appendChild(inputTitle);

//description
const desc= document.createElement('label');
desc.textContent='Description:';
const inputDesc= document.createElement('textarea');
inputDesc.rows=5;
inputDesc.cols=30;
inputDesc.placeholder="Give some description"
const valueDesc= inputDesc.value;
// desc.appendChild(inputDesc);

//duedate
const duedate= document.createElement('label');
duedate.textContent='Due date:';
const inputDueDate=document.createElement('input');
inputDueDate.type='date';
const valueDueDate=inputDueDate.value;
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
const valueNotes= inputNotes.value;
notes.appendChild(inputNotes);

//checklist

subTask();


//submit button
const btn= document.createElement('div');
btn.className='btn';
const submit= document.createElement('button');
submit.textContent="Confirm";
btn.appendChild(submit);
//add eventlistener
const cancel= document.createElement('button');
cancel.textContent="Cancel";
btn.appendChild(cancel)
//add eventlistener

const content= document.querySelector('.content2');
content.appendChild(title);
content.appendChild(desc);
content.appendChild(inputDesc);
content.appendChild(duedate);
content.appendChild(priority);
content.appendChild(notes);
content.appendChild(inputNotes)
// content.appendChild(checkList);
content.appendChild(btn);
// content.appendChild(cancel);



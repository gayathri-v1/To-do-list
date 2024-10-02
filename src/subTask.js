//sub task

// whatever input I get in the text I should add them in list
export function subTask(){
//label add sub task
const addSubTask = document.createElement('label');
addSubTask.textContent='Sub tasks:';
const ul= document.createElement('ul');


//input the subtask
const inputTask= document.createElement('input');
inputTask.type='text';


//button to add the task
const addButton= document.createElement('button');
addButton.textContent= 'Confirm';

addSubTask.appendChild(inputTask);
addSubTask.appendChild(addButton);

//create list after clicking add button
addButton.addEventListener('click',function(){
    const inputValue=inputTask.value;
    inputTask.value="";

//create list, done button and delete button.
    const list= document.createElement('li');
    const doneBtn= document.createElement('button');
    doneBtn.textContent="Done";
    const delBtn= document.createElement('button');
    delBtn.textContent="Delete";

    list.textContent=inputValue;

    list.appendChild(doneBtn);
    list.appendChild(delBtn);
    ul.appendChild(list);

    doneBtn.addEventListener('click', ()=>{
        list.style.textDecorationLine='line-through';
    });
    delBtn.addEventListener('click', ()=>{
        ul.removeChild(list);
    });
    inputTask.focus();


})
const content= document.querySelector('.content2');
content.appendChild(addSubTask);
addSubTask.appendChild(ul);

}

// subTask();


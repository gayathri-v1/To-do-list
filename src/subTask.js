//sub task

// whatever input I get in the text I should add them in list
export const array=[];// to store the list values

    


//label add sub task
const addSubTask = document.createElement('label');
addSubTask.textContent='Sub tasks:';
const ul= document.createElement('ul');


//input the subtask
const inputTask= document.createElement('input');
inputTask.type='text';


//button to add the task
const addButton= document.createElement('button');
addButton.textContent= 'Add';

//append to parent
addSubTask.appendChild(inputTask);
addSubTask.appendChild(addButton);

subTask();
export function subTask(){
//create list after clicking add button
addButton.addEventListener('click',function(){
    const inputValue=inputTask.value;
    inputTask.value="";

//create list, done button and delete button.
    // const doneBtn= document.createElement('button');
    // doneBtn.textContent="Done";
    // const delBtn= document.createElement('button');
    // delBtn.textContent="Delete";

    const list= document.createElement('li');
    list.textContent=inputValue;
    array.push(inputValue);////////////////////////////////////////////////
    // list.appendChild(doneBtn);
    // list.appendChild(delBtn);
    ul.appendChild(list);

    // doneBtn.addEventListener('click', ()=>{
    //     list.style.textDecorationLine='line-through';
    // });
    // delBtn.addEventListener('click', ()=>{
    //     ul.removeChild(list);
    // });
    inputTask.focus();
// console.log(array);
    

})


// console.log(array);
const content= document.createElement('div');
content.appendChild(addSubTask);
addSubTask.appendChild(ul);
return content;
}
export function deleteAll(){
    return addSubTask.removeChild(ul);
   
   }


// subTask();


export {content2,taskArray};
import { Project, Todo  } from './logic';
import { renderTask } from './content3';
const content2= document.createElement('div');
content2.className='content2';
const container= document.querySelector('.container');
container.appendChild(content2);

//create the form here using innerHTML
const taskArray=[];
const projArray=[];

content2.innerHTML=`
    <label for="title">Title</label>
    <input type="text" id="titleInput">
    
    <label for="Desc">Description</label>
    <textarea id="desc" rows="4" cols="50" placeholder="Give some description"></textarea>

    <label for="duedate">Duedate:</label>
    <input type="date" id="duedate">

    <label for="priority">Priority:</label>
    <select id="priority">
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
    </select>

    <label for="subTask">Sub tasks: </label>
    <div><input type="text" id="subtask">
    <button id="check"><span class="material-symbols-outlined">check</span></button><div>
    <div class="listDiv"></div>

    <div class="btn">
    <button class="submit">Submit</button>
    <button class="close">Close</button></div>    
`;
//add eventlisteners for three buttons check, close and submit
//check button
    let subtasksArray = [];
    const listDiv= document.querySelector('.listDiv');
    const ul=document.createElement('ul');
    listDiv.appendChild(ul);


    content2.querySelector('#check').addEventListener('click',()=>{
        let subtaskValue=content2.querySelector('#subtask').value;
        if (subtaskValue.trim()) {
            const listItem= document.createElement('li')
            listItem.textContent=subtaskValue;//display in DOM
            subtasksArray.push(subtaskValue);//assigning data to array
            content2.querySelector('#subtask').value="";
            ul.appendChild(listItem);
           
        }
        })

//submit button
        content2.querySelector('.submit').addEventListener('click',()=>{
            const valueTitle=document.querySelector('#titleInput').value;
            const valueDesc= document.querySelector('#desc').value;
            const valueDueDate=document.querySelector('#duedate').value;
            const valuePriority=document.querySelector('#priority').value;
            
            
            const obj= new Todo(valueTitle,valueDesc,valueDueDate,valuePriority,subtasksArray);
            // Project.addTodo(obj);
            taskArray.push(obj);
            projArray.push(taskArray);
            console.log(taskArray);
            clear();
            closeContent();
            renderTask(taskArray);
        })
//cancel button
        content2.querySelector('.close').addEventListener('click',()=>{
           closeContent();

        });
        function closeContent(){
            clear();
            subtasksArray = [];
            content2.style.display='none';
        }

        function clear(){
            document.querySelector('#titleInput').value="";
            document.querySelector('#desc').value="";
            document.querySelector('#duedate').value="";
            subtasksArray = []; 
            clearSubTasks();
        }

        function clearSubTasks(){
            ul.innerHTML = "";//Clear all list items inside ul 
        }
        
content2.style.display='none';


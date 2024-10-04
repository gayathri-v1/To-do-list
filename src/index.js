import './style.css';
import { Todo  } from './logic';
import { addProj} from './content1';
export{content2,addTask};


addProj();
const content2= document.querySelector('.content2');

 function addTask(){

//create the form here using innerHTML

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
    <button class="cancel">Cancel</button></div>    
`;
//add eventlisteners for three buttons check, cancel and submit
//check button
    const array= [];
    const listDiv= document.querySelector('.listDiv');
    const ul=document.createElement('ul');
    listDiv.appendChild(ul);

    content2.querySelector('#check').addEventListener('click',()=>{
            const listItem= document.createElement('li')
            listItem.textContent=content2.querySelector('#subtask').value;
            array.push(content2.querySelector('#subtask').value);
            content2.querySelector('#subtask').value="";
            ul.appendChild(listItem);
            
        })

//submit button
        content2.querySelector('.submit').addEventListener('click',()=>{
            const valueTitle=document.querySelector('#titleInput').value;
            const valueDesc= document.querySelector('#desc').value;
            const valueDueDate=document.querySelector('#duedate').value;
            const valuePriority=document.querySelector('#priority').value;
            
            
            const obj= new Todo(valueTitle,valueDesc,valueDueDate,valuePriority,array);
            console.log(obj);
            clear();
        })
//cancel button
        content2.querySelector('.cancel').addEventListener('click',()=>{
            // clear();
            content2.style.display='none';

        });

        function clear(){
            document.querySelector('#titleInput').value="";
            document.querySelector('#desc').value="";
            document.querySelector('#duedate').value="";
            deleteAll();
        }

        function deleteAll(){
            // const ul=content2.querySelector('ul');
            listDiv.removeChild(ul);

        }

return content2;
    }


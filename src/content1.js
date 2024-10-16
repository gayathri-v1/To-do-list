import {content2} from './content2';
import {Project} from './logic';

export{content1,addProject,addProj}

 const content1= document.querySelector('.content1');
 const addProject= document.querySelector('.addProject');

 function addProj(){
     const content3= document.querySelector('.content3');
     const headerDiv= document.createElement('div');
     headerDiv.className='headerDiv';
     content3.appendChild(headerDiv);
     const projArray=[];
//add title for the project with input text
addProject.addEventListener('click',()=>{
    const inputDiv = document.querySelector('#inputDiv');
//if there is no inputDiv then create one.This avoids creating multiple divs in each and every click.
    if(!inputDiv){
    const div= document.createElement('div')
    div.id='inputDiv';
    div.innerHTML=`
    <label for="projInput">Enter project name:</label>
    <div><input type="text" id="projInput">
    <button>Ok</button><div>
    `;

    div.querySelector('button').addEventListener('click',()=>{
        const value=div.querySelector('input').value;
        div.querySelector('input').value=""; //clear the input field
        const listdiv= document.createElement('div');
        listdiv.innerHTML=`
        <button class="projBtn"></button>
        <button> <span class="material-symbols-outlined" id="delete">delete</span></button>
        `;

        listdiv.querySelector('.projBtn').textContent=value;
        listdiv.querySelector('.projBtn').id=value;
        projArray.push(value);
        // projArray.push(listdiv.querySelector('.projBtn').id);
        // const projObj=new Project(value);
        //console.log(projObj);
       
        content1.appendChild(listdiv);
//handle the delete button
        listdiv.querySelector('#delete').addEventListener('click',()=>{
        content1.removeChild(listdiv);
        
    })
//handle the project button
listdiv.querySelector('.projBtn').addEventListener('click',()=>{
            headerDiv.innerHTML=`
            <h2></h2>
            <button id="addTaskBtn"><span class="material-symbols-outlined">
                add_circle
                </span>Add Task</button>

            `;
            const contentDiv= document.createElement('div');
            contentDiv.className='contentDiv';
            const table=document.createElement('table');
            table.innerHTML=`
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Priority</th>
                        <th>Subtasks</th>
                        <th>Action</th>
                    </tr>  
            `;
            contentDiv.appendChild(table);
            content3.appendChild(contentDiv);
            content3.querySelector('h2').textContent=listdiv.querySelector('.projBtn').id;
            const addTaskBtn= headerDiv.querySelector('#addTaskBtn');
            // content2.style.display='none';
            addTaskBtn.addEventListener('click',()=>{
            
                // content2.style.display = content2.style.display === 'none' ? 'flex' : 'none';
                if (content2.style.display === 'none') {
                    content2.style.display = 'flex';
                }
                
            });
        });
       
        div.style.display = 'none';
       
    
    });
    content1.appendChild(div);
}
//toggle input div
else{
    // 
    inputDiv.style.display = inputDiv.style.display === 'none' ? 'flex' : 'none';
            if (inputDiv.style.display === 'flex') {
                inputDiv.style.flexDirection = 'column';
            }
}
    
})

return content1;
}
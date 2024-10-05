import {content2} from './content2';

export{content1,addProject,addProj}
 const content1= document.querySelector('.content1');
 const addProject= document.querySelector('.addProject');
 function addProj(){
     const content3= document.querySelector('.content3');
     
//add title for the project with indput text
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
        div.querySelector('input').value="";
        const listdiv= document.createElement('div');
        listdiv.innerHTML=`
        <button class="projBtn"></button>
        <button> <span class="material-symbols-outlined" id="delete">delete</span></button>
        `;
        listdiv.querySelector('.projBtn').textContent=value;
        listdiv.querySelector('.projBtn').id=value;
       
        content1.appendChild(listdiv);
//handle the delete button
        listdiv.querySelector('#delete').addEventListener('click',()=>{
        content1.removeChild(listdiv);
    })
//handle the project button
listdiv.querySelector('.projBtn').addEventListener('click',()=>{
            content3.innerHTML=`
            <h2></h2>
            <button id="addTaskBtn"><span class="material-symbols-outlined">
                add_circle
                </span></button>

            `;
            content3.querySelector('h2').textContent=listdiv.querySelector('.projBtn').id;
            const addTaskBtn= content3.querySelector('#addTaskBtn');
            content2.style.display='none';
            addTaskBtn.addEventListener('click',()=>{
            
                if(content2.style.display==='none'){
                    content2.style.display="flex";}
                    else{
                        content2.style.display='none';
                    }
                
            });
        })
       
        div.style.display = 'none';
       
    
    })
    content1.appendChild(div);
}
//toggle input div
else{
    if (inputDiv.style.display === 'none') {
        inputDiv.style.display = 'flex';
        inputDiv.style.flexDirection = 'column';
    

    } else {
        inputDiv.style.display = 'none';
    }
}
    
})

return content1;
}
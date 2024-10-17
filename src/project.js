const addProject= document.querySelector('.addProject');
const projectDiv= document.querySelector('.projectDiv');

addProject.addEventListener('click',()=>{
     createProject();

});

function createProject(){
    const div= document.createElement('div');

    div.innerHTML=`
    <div class="createProject">
    <input type="text" id="project" placeholder="Enter project title"></input>
    <button class="check"><span class="material-symbols-outlined">
    check
    </span><button>
    </div>
    `;
        const check=div.querySelector('.check');
        const titleValue= div.querySelector('#project').value;

            check.addEventListener('click',()=>{
                renderProject(titleValue);
                console.log(titleValue);
            })
    
    projectDiv.appendChild(div);
  
};
function renderProject(value){
    const div= document.createElement('div');
    const projectName= document.createElement('p');
    projectName.textContent=value;
    div.appendChild(projectName);

    projectDiv.appendChild(div);
};


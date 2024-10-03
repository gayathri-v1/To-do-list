export const content1= document.querySelector('.content1');
export const addProject= document.querySelector('.addProject');
export function addProj(){


//add title for the project with indput text

const inputTitleProject= document.createElement('input');
inputTitleProject.type='text';
inputTitleProject.placeholder='Project name';

//ok button
const okBtn= document.createElement('button');
okBtn.textContent='OK';


//append to the parent node
const div= document.createElement('div')
div.className='projDiv';
div.appendChild(inputTitleProject);
div.appendChild(okBtn);
content1.appendChild(div);

// Initially hide the input div
div.style.display = 'none';
content1.appendChild(div);


//display the title in project pane
const projList= document.createElement('ul');

addProject.addEventListener('click', () => {
    div.style.display = 'flex'; // Show the input field and button
    inputTitleProject.focus(); // Focus on input field for better UX
});
okBtn.addEventListener('click',()=>{
const listItem= document.createElement('li');
const valueTitleProject=inputTitleProject.value;
inputTitleProject.value="";
listItem.textContent=valueTitleProject;
const listDEL= document.createElement('button');
listDEL.textContent="X";

listItem.appendChild(listDEL);
projList.appendChild(listItem);
content1.appendChild(projList);

listDEL.addEventListener('click',()=>{
projList.removeChild(listItem);

})
inputTitleProject.focus();


// disappear
inputTitleProject.value = '';
div.style.display = 'none';



})

return content1;
}
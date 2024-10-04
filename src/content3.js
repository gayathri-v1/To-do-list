// import { addProj } from "./content1";
import {content2,addTask} from "./index";
const content3= document.querySelector('.content3');
const addTaskBtn= document.querySelector('.addTaskBtn');

addTaskBtn.addEventListener('click',()=>{
    content2.style.display='flex';
    addTask();
    
});
    

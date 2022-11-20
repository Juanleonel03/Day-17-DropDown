const dropDown = document.getElementById('dropDown');
const iconDown = document.getElementById('icon')
const button = document.querySelector('button')
const buttonClick = (e)=>{
  e.stopPropagation();
  toggleDrop(!dropDown.classList.contains('open'));
} 
button.addEventListener('click', buttonClick)


const toggleDrop = (openDrop)=>{
  if(openDrop){
    dropDown.classList.add('open')
  }else{
    dropDown.classList.remove('open')
  }
  iconDown.className = dropDown.classList.contains('open') ? "bi bi-x-lg" : "bi bi-chevron-down";
}
document.body.addEventListener('click', ()=> toggleDrop())
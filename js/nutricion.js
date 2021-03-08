const body_disclaimer = document.getElementById('body_disclaimer');
body_disclaimer.addEventListener('click', ()=>{
    body_disclaimer.remove()
})
console.log(screen.width)
const ul_nav = document.getElementById('ul_nav')
if (window.innerWidth < 376)
ul_nav.removeChild(ul_nav.children[0]);

const backgroundFirstPanel = document.getElementById('backgroundFirstPanel');
const firstPanelLeft = document.getElementById('firstPanelLeft');

const firstPanelRight = document.getElementById('firstPanelRight');

firstPanelLeft.addEventListener('click', ()=>{
    if (backgroundFirstPanel.classList.value === 'body__firts_panel'){
    backgroundFirstPanel.classList.replace('body__firts_panel','body__firts_panel-2');
    console.log(backgroundFirstPanel.classList.value);
    } else {
    backgroundFirstPanel.classList.replace('body__firts_panel-2','body__firts_panel');
    console.log(backgroundFirstPanel.classList.value);
    }
    
})

firstPanelRight.addEventListener('click', ()=>{
    if (backgroundFirstPanel.classList.value === 'body__firts_panel'){
        backgroundFirstPanel.classList.replace('body__firts_panel','body__firts_panel-2');
        console.log(backgroundFirstPanel.classList.value);
        } else {
        backgroundFirstPanel.classList.replace('body__firts_panel-2','body__firts_panel');
        console.log(backgroundFirstPanel.classList.value);
        }
})
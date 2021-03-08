const body_disclaimer = document.getElementById('body_disclaimer');
body_disclaimer.addEventListener('click', ()=>{
    body_disclaimer.remove()
})
console.log(screen.width)
const ul_nav = document.getElementById('ul_nav')
if (window.innerWidth < 376)
ul_nav.removeChild(ul_nav.children[0]);

let login = document.getElementById('login')
let login_logo = document.getElementById('login_logo')
let login_btn = document.getElementById('login_btn')

login.addEventListener('click',(e)=>{
    login_logo.classList.toggle('fa-chevron-down')
    login_logo.classList.toggle('fa-chevron-up')
    login_btn.classList.toggle('block') 
})

let threeDotsOpen = document.getElementById('dots_open')
let threeDotsContainer = document.getElementById('dots_container')
console.log(threeDotsOpen);


threeDotsContainer.addEventListener('click', () => {
    threeDotsOpen.classList.toggle('none')
})


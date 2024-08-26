const hamburgerMenu = document.querySelector('#hamburger-menu');
const navbar = document.getElementById('navbar');
const closeBtn = document.getElementById('close-btn');


hamburgerMenu.addEventListener('click', () =>{
    navbar.style.display = 'block';
})


closeBtn.addEventListener('click', ()=>{
    navbar.style.display = 'none';
})

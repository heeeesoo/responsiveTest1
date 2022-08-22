const toggleBtn = document.querySelector('.togleBtn');
const menu = document.querySelector('.navbar_menu');
const links = document.querySelector('.navbar_links');

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    links.classList.toggle('active');
});
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');

let showMenu = false;
console.log(navItems);
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        for (let items = 0; items < navItems.length; items++) {
            const element = navItems[items];
            element.classList.add('open');
        }
        
        hamburger.classList.remove('close');
        nav.classList.remove('close');
        menuNav.classList.remove('close');
        navItems.forEach(item => item.classList.remove('close'));
        showMenu = true;
    }
    else{
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        
        hamburger.classList.add('close');
        nav.classList.add('close');
        menuNav.classList.add('close');
        for (let items = 0; items < navItems.length; items++) {
            const element = navItems[items];
            element.classList.add('close');
        }
        
        showMenu = false;
    }
}
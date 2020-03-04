const menubtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn-burger');
const nav = document.querySelector('.menunav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav-items');

let showMenu = true;

menubtn.addEventListener('click',toggleMenu);

function toggleMenu() {
  if(showMenu)
  {
    hamburger.classList.add('open');
    nav.classList.add('open'); 
    menuNav.classList.add('open');
    navItems.forEach(function(navItem){
      navItem.classList.add('open');
    });
    showMenu = false;
  }else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(function(navItem){
      navItem.classList.remove('open');
    });
    showMenu =true;
  }
}

for(i=0;i<navItems.length;i++)
{
  navItems[i].addEventListener('click',(e)=> {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    
  })

}
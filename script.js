const mobileMenu = document.querySelector('#hamburger');

mobileMenu.onclick = () => {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('mobile-menu');
    const lis = menu.querySelectorAll('li');
    for (let li of lis){
      li.classList.toggle('mobile-li');
      li.firstElementChild.classList.add('mobile-a');
    }
}

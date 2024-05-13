window.addEventListener('scroll', function () {
    var headerSticky = document.querySelector('.header_sticky');
    if (window.scrollY > 600 || window.innerWidth < 630 && window.scrollY > 400) {
        headerSticky.classList.add('visible'); // Добавляем класс visible для плавного показа
    } else {
        headerSticky.classList.remove('visible'); // Удаляем класс visible для плавного скрытия
    }
});

let menu_service = document.getElementById('menu_service');
let mobile_menu = document.querySelector('.services_menu_mobile');

menu_service.addEventListener('click', () => {
    const isActive = mobile_menu.classList.contains('block');
    console.log(isActive);
    if (isActive) {
        mobile_menu.style.maxHeight = 0;
    } else {
        mobile_menu.style.maxHeight = mobile_menu.scrollHeight + 40 + 'px';
    }
    mobile_menu.classList.toggle('block');
});


window.addEventListener('scroll', function() {
    var headerSticky = document.querySelector('.header_sticky');
    if (window.scrollY > 600) {
        headerSticky.classList.add('visible'); // Добавляем класс visible для плавного показа
    } else {
        headerSticky.classList.remove('visible'); // Удаляем класс visible для плавного скрытия
    }
});


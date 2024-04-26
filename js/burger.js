    function toggleMenu() {
        const menu = document.getElementById('header_top_burger_menu');
        const burgerButtons = document.querySelectorAll('.header_top_burger');
        console.log(burgerButtons);
        if (menu) {
            menu.classList.toggle('open');
            burgerButtons.forEach(button => {
                button.classList.toggle('active');
            });
        }
    }

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
            const menu = document.getElementById('header_top_burger_menu');
            if (menu.classList.contains('open')) {
                const isMenuOpen = menu.classList.contains('open');
                const isClickInsideMenu = menu.contains(event.target);
                const isClickOnBurger = event.target.classList.contains('header_top_burger');

                if (isMenuOpen && !isClickInsideMenu && !isClickOnBurger) {
                    toggleMenu();
                }
            }
        });

});

document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('dropdown');
    const selectedContainer = document.getElementById('selected-container');
    let selectedItems = [];

    dropdown.addEventListener('change', () => {
        const selectedValue = dropdown.value;
        if (!selectedItems.includes(selectedValue)) {
            selectedItems.push(selectedValue);
            renderSelectedItems();
        }
    });

    selectedContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('selected-item')) {
            const value = event.target.innerText;
            selectedItems = selectedItems.filter(item => item !== value);
            renderSelectedItems();
        }
    });

    function renderSelectedItems() {
        selectedContainer.innerHTML = '';
        selectedItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'selected-item';
            div.innerText = item;
            selectedContainer.appendChild(div);
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.stars');
    const ratingInput = document.getElementById('rating');

    starsContainer.addEventListener('mouseenter', (event) => {
        const star = event.target;
        if (star.tagName === 'IMG') {
            const value = parseInt(star.getAttribute('data-value'));
            highlightStars(starsContainer, value);
        }
    });

    starsContainer.addEventListener('mouseleave', () => {
        const selectedStars = document.querySelectorAll('.stars img.selected');
        selectedStars.forEach(star => {
            star.classList.remove('hovered');
        });
    });

    starsContainer.addEventListener('click', (event) => {
        const star = event.target;
        if (star.tagName === 'IMG') {
            const value = parseInt(star.getAttribute('data-value'));
            selectStars(starsContainer, value);
            ratingInput.value = value;
        }
    });

    function highlightStars(container, value) {
        const stars = container.querySelectorAll('img');
        stars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'));
            if (starValue <= value) {
                star.classList.add('hovered');
            } else {
                star.classList.remove('hovered');
            }
        });
    }

    function selectStars(container, value) {
        const stars = container.querySelectorAll('img');
        stars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'));
            if (starValue <= value) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }
});


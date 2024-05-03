document.querySelectorAll('.accordion_btn').forEach(item => {
    const firstAccordionItem = document.querySelector('.accordion_item'); // Выбираем первый элемент аккордеона
    const firstAccordionBtn = firstAccordionItem.querySelector('.accordion_btn'); // Выбираем кнопку в первом элементе аккордеона
    const firstAccordionContent = firstAccordionItem.querySelector('.accordion_content'); // Выбираем содержимое в первом элементе аккордеона

    // Добавляем классы active и accordion_content__active к первому элементу аккордеона
    firstAccordionItem.classList.add('active');
    firstAccordionBtn.classList.add('accordion_btn__active');
    firstAccordionContent.classList.add('accordion_content__active');
    firstAccordionContent.style.maxHeight = firstAccordionContent.scrollHeight + 'px'; // Устанавливаем максимальную высоту содержимого


    item.addEventListener('click', event => {
        const parent = item.closest('.accordion_item'); // Находим ближайший родительский элемент с классом accordion_item
        const content = parent.querySelector('.accordion_content'); // Находим соответствующий блок с содержимым
        const isActive = content.classList.contains('accordion_content__active'); // Проверяем, активен ли данный элемент

        // Закрываем все активные элементы
        document.querySelectorAll('.accordion_item').forEach(el => {
            el.classList.remove('active');
            el.querySelector('.accordion_content').classList.remove('accordion_content__active');
            el.querySelector('.accordion_content').style.maxHeight = `0`;
        });

        // Убираем класс active у всех кнопок
        document.querySelectorAll('.accordion_btn').forEach(btn => {
            btn.classList.remove('accordion_btn__active');
        });

        // Если текущий элемент не активен, делаем его активным
        if (!isActive) {
            item.classList.add('accordion_btn__active');
            parent.classList.add('active');
            content.classList.add('accordion_content__active');
            content.style.maxHeight = content.scrollHeight + 18 + 'px';
        }
    });
});

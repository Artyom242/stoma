document.addEventListener('DOMContentLoaded', function () {
    const accordionBtns = document.querySelectorAll('.accordion_btn');
    const dataContainer = document.querySelector('.table_section');

    // Данные для разделов
    const data1 = [
        { name: 'Лечение кариеса пломба химического отверждения', price: 'от 2000 до 2500' },
        { name: 'Лечение кариеса пломба светового отверждения', price: '2500' },
        { name: 'Лечение кариеса пломба светового отверждения', price: '2000' },
    ];

    const data2 = [
        { name: 'Лечение пульпита однокорневого зуба', price: '129399' },
        { name: 'Лечение пульпита трехкорневого зуба', price: '1230' },
        { name: 'Лечение кариеса пломба химического отверждения', price: '2300' },
        { name: 'Лечение периодонтита', price: '5000' },
        { name: 'Лечение периодонтита', price: '5000' },
        { name: 'Лечение периодонтита', price: '5000' },
        { name: 'Лечение периодонтита', price: '5000' },
        { name: 'Лечение периодонтита', price: '5000' },
        { name: 'Лечение периодонтита', price: '5000' },
    ];

    function updateData(data) {
        // Очистка контейнера данных
        dataContainer.innerHTML = '';

        // Создание заголовка
        const titleBlock = document.createElement('div');
        titleBlock.classList.add('column_block', 'column_block__title');
        titleBlock.innerHTML = `
        <p>Название процедуры</p>
        <p>Цена</p>
      `;
        dataContainer.appendChild(titleBlock);

        // Добавление данных в контейнер
        data.forEach(item => {
            const dataBlock = document.createElement('div');
            dataBlock.classList.add('column_block');
            dataBlock.innerHTML = `
          <p>${item.name}</p>
          <p>${item.price}</p>
        `;
            dataContainer.appendChild(dataBlock);
        });

        // Мгновенное изменение высоты
        dataContainer.style.maxHeight = dataContainer.scrollHeight + 'px'; // Установить новую высоту
    }

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const title = this.dataset.title;
            let data;
            if (title === 'Раздел 1') {
                data = data1;
            } else if (title === 'Раздел 2') {
                data = data2;
            }
            accordionBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            updateData(data);
        });
    });

    // По умолчанию открываем первый раздел и обновляем данные
    accordionBtns[0].click();
});

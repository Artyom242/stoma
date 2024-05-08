// const calendar = document.getElementById('calendar');
// let formattedDate = ''; // Переменная для хранения выбранной даты

// calendar.addEventListener('click', function (event) {
//     const target = event.target;

//     // Проверяем, является ли родительский элемент ячейки элементом tbody с классом "body_calendar"
//     if (target.tagName === 'TD' && target.parentElement.parentElement.classList.contains('body_calendar')) {
//         const selectedDate = target.innerText.trim(); // Получаем текст ячейки (например, "1", "2", ..., "31")
//         const currentMonthHeader = document.querySelector('.row_title_calendar .title_calendar'); // Получаем заголовок текущего месяца
//         const currentMonth = currentMonthHeader.textContent.trim(); // Получаем текст заголовка текущего месяца
//         const currentYear = new Date().getFullYear(); // Получаем текущий год

//         // Преобразуем название текущего месяца в номер месяца (1 - январь, 2 - февраль, и т.д.)
//         const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
//         const currentMonthNumber = monthNames.indexOf(currentMonth.toLowerCase()) + 1;

//         formattedDate = `${selectedDate}.${currentMonthNumber}.${currentYear}`;
//         console.log('Выбранная дата:', formattedDate);
//     }
// });

function validateForm(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    const form = document.querySelector('.form');

    // Проверка всех полей на заполненность
    const nameInput = form.querySelector('input[type="text"]');
    const phoneInput = form.querySelector('input[type="tel"]');
    const radioInputs = form.querySelectorAll('input[type="radio"]');
    const checkboxInputs = form.querySelectorAll('input[type="checkbox"]');

    let isValid = true; // Переменная для хранения результатов валидации

    // if (!formattedDate) {
    //     isValid = false;
    //     alert('Пожалуйста, выберите дату');
    // }

    // Проверка имени
    if (nameInput.value.trim() === '') {
        isValid = false;
        alert('Пожалуйста, введите ваше имя');
    }

    // Проверка телефона
    if (phoneInput.value.trim() === '') {
        isValid = false;
        alert('Пожалуйста, введите ваш номер телефона');
    }

    // Проверка выбора радио-кнопки
    let isRadioChecked = false;
    radioInputs.forEach(function (radioInput) {
        if (radioInput.checked) {
            isRadioChecked = true;
        }
    });
    if (!isRadioChecked) {
        isValid = false;
        alert('Пожалуйста, выберите тип записи');
    }

    // Проверка выбора хотя бы одного чекбокса
    let isCheckboxChecked = false;
    checkboxInputs.forEach(function (checkboxInput) {
        if (checkboxInput.checked) {
            isCheckboxChecked = true;
        }
    });
    if (!isCheckboxChecked) {
        isValid = false;
        alert('Пожалуйста, выберите время приема');
    }

    // Если валидация пройдена, можно отправлять форму
    if (isValid) {
        form.submit();
    }
}

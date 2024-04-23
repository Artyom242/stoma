function validateForm(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    const form = document.querySelector('.form');

    // Проверка всех полей на заполненность
    const nameInput = form.querySelector('input[type="text"]');
    const phoneInput = form.querySelector('input[type="tel"]');
    const radioInputs = form.querySelectorAll('input[type="radio"]');
    const checkboxInputs = form.querySelectorAll('input[type="checkbox"]');

    let isValid = true; // Переменная для хранения результатов валидации

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
    radioInputs.forEach(function(radioInput) {
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
    checkboxInputs.forEach(function(checkboxInput) {
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

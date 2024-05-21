document.addEventListener('DOMContentLoaded', () => {
  const openModalBtns = document.querySelectorAll('.openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');

  // Функция для открытия модального окна
  function openModal() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    document.body.classList.add('modal-open'); // Добавление класса для блокировки прокрутки
    setTimeout(() => {
      modal.style.opacity = '1';
      overlay.style.opacity = '1';
    }, 10);
    console.log(Calendar);
  }

  // Функция для закрытия модального окна
  function closeModal() {
    modal.style.opacity = '0';
    overlay.style.opacity = '0';
    document.body.classList.remove('modal-open'); // Удаление класса для разблокировки прокрутки
    setTimeout(() => {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    }, 300);
  }

  // Обработчик событий для открытия модального окна
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  // Обработчик событий для закрытия модального окна
  closeModalBtn.addEventListener('click', closeModal);

  // Закрытие модального окна при нажатии на затемняющий фон
  overlay.addEventListener('click', closeModal);
});
function Calendar(container, year, month) {
    var Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = '<tr>',
        monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    var startOffset = DNfirst === 0 ? 6 : DNfirst - 1;

    for (var i = 0; i < startOffset; i++) {
        calendar += '<td>';
    }

    for (var i = 1; i <= Dlast; i++) {
        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            calendar += '<td class="today">' + i;
        } else {
            calendar += '<td>' + i;
        }
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0 || i === Dlast) {
            calendar += '</tr><tr>';
        }
    }

    var calendarElement = container.querySelector('tbody');
    calendarElement.innerHTML = calendar;
    var titleElement = container.querySelector('thead .title_calendar');
    titleElement.innerHTML = monthNames[D.getMonth()] + ' ' + D.getFullYear();
    titleElement.dataset.month = D.getMonth();
    titleElement.dataset.year = D.getFullYear();
}

function handleCellEvents(container) {
    var cells = container.querySelectorAll('tbody td');
    cells.forEach(function (cell) {
        if (cell.innerHTML.trim() !== '') {
            cell.onmouseover = function () {
                if (!this.classList.contains('selected')) {
                    this.style.backgroundColor = '#dcf1fd';
                }
            };
            cell.onmouseout = function () {
                if (!this.classList.contains('selected')) {
                    this.style.backgroundColor = '';
                }
            };
            cell.onclick = function () {
                if (this.classList.contains('selected')) {
                    this.classList.remove('selected');
                    this.style.backgroundColor = '';
                } else {
                    var selected = container.querySelector('.selected');
                    if (selected) {
                        selected.classList.remove('selected');
                        selected.style.backgroundColor = '';
                    }
                    this.classList.add('selected');
                    this.style.backgroundColor = '#dcf1fd';
                }
            };
        }
    });
}

function setupCalendar(container) {
    var year = new Date().getFullYear();
    var month = new Date().getMonth();
    Calendar(container, year, month);
    handleCellEvents(container);

    container.querySelector('.row_title_calendar .prev').onclick = function () {
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
        Calendar(container, year, month);
        handleCellEvents(container);
    }

    container.querySelector('.row_title_calendar .next').onclick = function () {
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
        Calendar(container, year, month);
        handleCellEvents(container);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var calendars = document.querySelectorAll('.calendar');
    calendars.forEach(setupCalendar);
});

// маска телефона
$(function () {
    $("#phone").mask("+7(999) 999-9999");
});
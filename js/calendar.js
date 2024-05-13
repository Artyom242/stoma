function Calendar(id, year, month) {
    var Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = '<tr>',
        monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    // Перемещаемся на начало текущей недели
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

    document.querySelector('#' + id + ' tbody').innerHTML = calendar;
    document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = monthNames[D.getMonth()] + ' ' + D.getFullYear();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
}

function handleCellEvents() {
    var cells = document.querySelectorAll('#calendar tbody td');
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
                    // Если ячейка уже была выбрана, снимаем выделение
                    this.classList.remove('selected');
                    this.style.backgroundColor = '';
                } else {
                    // Если ячейка не была выбрана, добавляем выделение
                    var selected = document.querySelector('.selected');
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

Calendar("calendar", new Date().getFullYear(), new Date().getMonth());
handleCellEvents();

document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
    Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1);
    handleCellEvents();
}

document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
    Calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1);
    handleCellEvents();
}

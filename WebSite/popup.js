document.addEventListener('DOMContentLoaded', () => {
    const popupLinks = document.querySelectorAll('.popup-link'); // Ссылки, которые открывают попап
    const popup = document.querySelector('.popup'); // Попап
    const popupClose = document.querySelector('.popup-close'); // Крестик для закрытия

    // Открыть попап
    popupLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            popup.classList.add('open'); // Добавляем класс для открытия
        });
    });

    // Закрыть попап при клике на крестик
    popupClose.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.remove('open'); // Удаляем класс для закрытия
    });

    // Закрыть попап при клике вне содержимого
    popup.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content')) {
            popup.classList.remove('open'); // Удаляем класс для закрытия
        }
    });

    // Закрыть попап при нажатии на клавишу Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            popup.classList.remove('open'); // Удаляем класс для закрытия
        }
    });
});

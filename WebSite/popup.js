document.addEventListener('DOMContentLoaded', () => {
    const popupLinks = document.querySelectorAll('.popup-link'); 
    const popup = document.querySelector('.popup'); 
    const popupClose = document.querySelector('.popup-close'); 
    const popupImage = popup.querySelector('.popup-img'); 
    

    const sizeOptions = document.querySelectorAll(".size-option"); 
    const quantityElement = document.querySelector(".quantity"); 
    const decrementButton = document.querySelector(".quantity-btn.decrement"); 
    const incrementButton = document.querySelector(".quantity-btn.increment"); 

    // Открыть попап
    popupLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const productImgSrc = link.querySelector('.product-img').src;

            if (popupImage) {
                popupImage.src = productImgSrc;
            }

            popup.classList.add('open'); 
        });
    });

    popupClose.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.remove('open'); 
    });

    popup.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content')) {
            popup.classList.remove('open'); 
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            popup.classList.remove('open'); 
        }
    });


    //
    sizeOptions.forEach(option => {
        option.addEventListener("click", () => {
            // Убираем класс "selected" у всех размеров
            sizeOptions.forEach(size => size.classList.remove("selected"));

            // Добавляем класс "selected" к выбранному размеру
            option.classList.add("selected");
        });
    });

    // Изменение количества товара
    decrementButton.addEventListener("click", () => {
        let quantity = parseInt(quantityElement.textContent, 10); // Текущее количество
        if (quantity > 1) {
            quantity -= 1; // Уменьшаем, если больше 1
            quantityElement.textContent = quantity; // Обновляем отображение
        }
    });

    incrementButton.addEventListener("click", () => {
        let quantity = parseInt(quantityElement.textContent, 10); // Текущее количество
        quantity += 1; // Увеличиваем
        quantityElement.textContent = quantity; // Обновляем отображение
    });
});

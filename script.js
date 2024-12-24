const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,        // Показывать 1 слайд
    spaceBetween: 10,        // Отступ между слайдами
    loop: true,              // Бесконечная прокрутка
    grabCursor: true,        // Курсор-рука при наведении на слайдер
    simulateTouch: true,     // Поддержка перетаскивания слайдов мышью
    touchEventsTarget: 'container', // На контейнере происходит перетаскивание
    autoplay: {
      delay: 7000,           // Задержка между переключениями (в миллисекундах)
    },
    
    // Отключаем элементы навигации и пагинацию
    navigation: false,
    pagination: false,
  });


  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
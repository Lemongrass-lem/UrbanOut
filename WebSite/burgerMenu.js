function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu(); 
  }
  
  function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('hidden');
  }
  
  function closeMenu() {
    const menu = document.querySelector('.menu');
    if (!menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
    }
  }
  

  document.addEventListener('click', (event) => {
    const menu = document.querySelector('.menu');
    const burgerToggle = document.querySelector('.burger-toggle');
  
    if (!menu.contains(event.target) && !burgerToggle.contains(event.target)) {
      closeMenu();
    }
  });
  
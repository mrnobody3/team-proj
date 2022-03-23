(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
      slideMenu: document.querySelector("[slide-menu]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-visible");
      refs.slideMenu.classList.toggle("slide");
    }
  })();
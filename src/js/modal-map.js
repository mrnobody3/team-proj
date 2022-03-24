(() => {
      const refs = {
        openModalBtn: document.querySelector('[data-map-open]'),
        closeModalBtn: document.querySelector('[data-map-close]'),
        modal: document.querySelector('[data-map]'),
        noScroll: document.querySelector('[scroll]'),
      };

      refs.openModalBtn.addEventListener('click', toggleModal);
      refs.closeModalBtn.addEventListener('click', toggleModal);

      function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        refs.noScroll.classList.toggle('scroll');
      }
    })();
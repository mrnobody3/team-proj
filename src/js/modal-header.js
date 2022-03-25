(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      openModal: document.querySelector("[modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModal.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    
  
    function toggleModal() {
      refs.modal.classList.toggle("backdrop-visible");
    }
  })();
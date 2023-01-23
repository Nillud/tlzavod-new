const modal = document.querySelector('.tlz-modal');

if (modal) {
  setTimeout(() => {
    modal.classList.remove('tlz-modal--active');
    modal.classList.add('tlz-modal--closed');
  }, 2000);
}


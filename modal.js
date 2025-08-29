const backdrop = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');
const form = document.querySelector('#modalForm');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) closeModal();
});

function openModal() {
  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  backdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
}

modalBtnOpen.addEventListener('click', openModal);
modalBtnClose.addEventListener('click', closeModal);

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) closeModal();
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !backdrop.classList.contains('is-hidden')) {
    closeModal();
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (form.checkValidity()) {
    alert('Форма успішно надіслана!');
    form.reset();
    closeModal();
  } else {
    form.reportValidity();
  }
});

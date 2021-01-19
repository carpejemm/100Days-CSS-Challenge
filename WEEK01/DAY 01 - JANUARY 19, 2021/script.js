const btn = document.querySelector('#dismiss-btn');
const modal = document.querySelector('#modal');

btn.addEventListener('click', () => {
  modal.classList.add('hide');
});
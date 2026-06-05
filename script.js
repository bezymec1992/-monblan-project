// datepicker
document.querySelectorAll('.hero__field').forEach(field => {
  const input = field.querySelector('.hero__input');

  const picker = flatpickr(input, {
    dateFormat: 'd-m-Y',
    disableMobile: true,
  });

  field.querySelector('.hero__action--calendar').addEventListener('click', () => picker.open());

  field.querySelector('.hero__action--clear').addEventListener('click', () => picker.clear());
});

//cards
const viewButtons = document.querySelectorAll('.posts__view-btn');
const postsList = document.querySelector('.posts__list');

viewButtons.forEach(button => {
  button.addEventListener('click', () => {
    viewButtons.forEach(btn => btn.classList.remove('posts__view-btn--active'));

    button.classList.add('posts__view-btn--active');

    const view = button.dataset.view;

    postsList.classList.remove('posts__list--grid', 'posts__list--list');

    postsList.classList.add(`posts__list--${view}`);
  });
});

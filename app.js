'use strict';

const ratingsContainer = document.querySelector('.card__list');
const ratings = ratingsContainer.querySelectorAll('.card__number');
let rating = 0;

ratingsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.card__number');

  if (!clicked) return;

  ratings.forEach((r) => r.classList.remove('card__number--active'));
  clicked.classList.add('card__number--active');
  rating = +clicked.dataset.rating;
  console.log(rating);
});

'use strict';

const ratingsContainer = document.querySelector('.card__list');
const ratings = ratingsContainer.querySelectorAll('.card__number');
const submitBtn = document.querySelector('.btn');
const ratingBox = document.querySelector('.card--rating');
const submitBox = document.querySelector('.card--submit');
const ratingLabel = document.querySelector('#rating');

let rating = 0;

ratingsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.card__number');

  if (!clicked) return;

  ratings.forEach((r) => r.classList.remove('card__number--active'));
  clicked.classList.add('card__number--active');
  rating = +clicked.dataset.rating;
  console.log(rating);
});

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if(rating === 0) return;

  ratingBox.classList.add('hidden');
  submitBox.classList.remove('hidden');
  ratingLabel.innerHTML = rating;
});

import { onSubmit } from './js/pixabay-api.js';

export const refs = {
  searchBtn: document.querySelector('.js-search-btn'),
  searchInput: document.querySelector('.js-search-field'),
  form: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', onSubmit);

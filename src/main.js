import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { searchImg } from './js/pixabay-api.js';
import { imgsTemplate, lightbox } from './js/render-functions.js';

export const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('#search-text'),
  button: document.querySelector('button[type="submit"]'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader') // виправив
};

refs.form.addEventListener('submit', e => {
    e.preventDefault();
    const query = refs.input.value.trim();

  if (query === '') {
    return;
  }
  refs.gallery.innerHTML = '<span class="loader"></span>';
  refs.form.reset();

  searchImg(query)
    .then(({ data }) => {
      refs.gallery.innerHTML = '';
      
      if (data.hits.length === 0) {
        iziToast.info({
          title: '',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fafafb',
          backgroundColor: '#ef4040',
          messageSize: '16px',
          position: 'topRight',
          maxWidth: '432px',
        });
      } else {
        refs.gallery.innerHTML = imgsTemplate(data.hits);
        lightbox.refresh();
      }
    })
    .catch(error => {
       refs.gallery.innerHTML = '';
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again.',
        position: 'topRight',
      });
    });
});
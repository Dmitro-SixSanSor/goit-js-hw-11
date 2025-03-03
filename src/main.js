import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

export const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('#search-text'), 
  button: document.querySelector('button[type="submit"]'),
  gallery: document.querySelector('.gallery')
};

refs.form.addEventListener('submit', e => {
    e.preventDefault();
    const query = refs.input.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  fetchImages(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'No Results',
          message: 'No images found for your search.',
          position: 'topRight',
        });
      } else {
        const markup = imgsTemplate(data.hits);
        refs.gallery.innerHTML = markup;
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again.',
        position: 'topRight',
      });
    });
  e.target.reset();
});
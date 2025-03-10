import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

export const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('#search-text'),
  button: document.querySelector('button[type="submit"]'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader-box') 
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function toggleLoader() {
  refs.loader.classList.toggle('hidden');
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}

if (refs.form) {
  refs.form.addEventListener('submit', async (e) => {
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

    clearGallery(); 
    toggleLoader();

    try {
      const data = await fetchImages(query);
      
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'No Results',
          message: 'No images found for your search.',
          position: 'topRight',
        });
      } else {
        const markup = renderGallery(data.hits);
        refs.gallery.innerHTML = markup;

        lightbox.refresh();
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again.',
        position: 'topRight',
      });
    } finally {
      toggleLoader(); 
    }

    e.target.reset();
  });
} else {
  console.error("Форма не знайдена в DOM!");
}

export { clearGallery, toggleLoader, lightbox };
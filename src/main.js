import { renderImages, clearGallery } from './js/render-functions';
import { fetchImages } from './js/pixabay-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const images = await fetchImages(query);

    if (!Array.isArray(images) || images.length === 0) {
      iziToast.warning({
        title: 'Oops!',
        message: 'Sorry, there are no images matching your search query. Please, try again!',
      });
    } else {
      renderImages(images);
    }
  } catch (error) {
  
    console.error('Fetch error:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Try again later!',
    });
  } finally {
    hideLoader();
  }
});

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

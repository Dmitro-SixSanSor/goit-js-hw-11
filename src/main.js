import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

export const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('#search-text'),
  button: document.querySelector('button[type="submit"]'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader')
};

function toggleLoader(show) {
  if (show) {
    refs.loader.classList.remove('hidden');
  } else {
    refs.loader.classList.add('hidden');
  }
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
    toggleLoader(true);

    try {
      console.log(`🔍 Fetching images for: "${query}"...`);
      const data = await fetchImages(query);

      if (!data || data.length === 0) {
        iziToast.info({
          title: 'No Results',
          message: 'No images found for your search.',
          position: 'topRight',
        });
      } else {
        console.log(`✅ Received ${data.length} images`);
        renderGallery(data, refs.gallery);
      }
    } catch (error) {
      console.error('❌ Error in fetching images:', error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again.',
        position: 'topRight',
      });
    } finally {
      toggleLoader(false);
    }

    e.target.reset(); 
  });
} else {
  console.error("⚠️ Форма не знайдена в DOM!");
}


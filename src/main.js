import { getImage } from './js/pixabay-api';
import errorIcon from './img/error.svg';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const iziOption = {
  messageColor: '#FAFAFB',
  messageSize: '16px',
  backgroundColor: '#EF4040',
  iconUrl: errorIcon,
  transitionIn: 'bounceInLeft',
  position: 'topRight',
  displayMode: 'replace',
  closeOnClick: true,
};

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();
  
  const input = document.querySelector('.user-input').value.trim();
  const box = document.querySelector('.gallery');
  const loader = document.querySelector('.loader');

  if (!input) {
    iziToast.show({
      ...iziOption,
      message: 'Please enter the search query',
    });
    return;
  }

  box.innerHTML = '';  
  loader.classList.remove('hidden');  

  
  getImage(input)
    .then(images => {
      loader.classList.add('hidden');  
      if (images.length > 0) {
        renderGallery(images, box);  
      } else {
        iziToast.show({
          ...iziOption,
          message: 'No images found for your search',
        });
      }
    })
    .catch(() => {
      loader.classList.add('hidden');  
      iziToast.show({
        ...iziOption,
        message: 'Error loading images. Please try again.',
      });
    });
});
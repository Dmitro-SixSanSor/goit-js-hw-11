import { getImage } from './js/pixabay-api';
import { hideLoader, renderImages, showLoader, showMessage } from './js/render-functions';

const form = document.querySelector('.form'); 
const input = document.querySelector('.user-input'); 

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const searchText = input.value.trim(); 

  if (!searchText) {
    showMessage('Please enter a search query');
    return;
  }

  input.value = ''; 

  showLoader(); 

  getImage(searchText) 
    .then(data => handleSearchResults(data.hits)) 
    .catch(err => {
      console.error(err);
      showMessage('Something went wrong. Please try again later.');
    });
}

function handleSearchResults(images) {
  if (!images.length) {
    showMessage('No images found. Please try another search.');
  } else {
    renderImages(images); 
  }
}

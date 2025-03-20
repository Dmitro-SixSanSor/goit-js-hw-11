import axios from 'axios';

const API_KEY = '49423998-53f799fc922e58b577969e777'; 
const BASE_URL = 'https://pixabay.com/api/';

export async function getImage(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      }
    });

    if (response.data.hits.length > 0) {
      renderImages(response.data);
    } else {
      iziToast.show({
        ...iziOption,
        message: 'No results found. Please try again.',
      });
    }
  } catch (error) {
    iziToast.show({
      ...iziOption,
      message: 'Error occurred while fetching images. Please try again.',
    });
  }
}

function renderImages(data) {
  const box = document.querySelector('.gallery');
  let markup = '';

  data.hits.forEach(image => {
    markup += `
      <li class="gallery__item">
        <a href="${image.largeImageURL}" class="gallery__link">
          <img src="${image.webformatURL}" alt="${image.tags}" class="gallery__img">
          <div class="info">
            <p><b>Likes:</b> ${image.likes}</p>
            <p><b>Views:</b> ${image.views}</p>
            <p><b>Comments:</b> ${image.comments}</p>
            <p><b>Downloads:</b> ${image.downloads}</p>
          </div>
        </a>
      </li>
    `;
  });

  box.innerHTML = markup;
  new SimpleLightbox('.gallery a');
}

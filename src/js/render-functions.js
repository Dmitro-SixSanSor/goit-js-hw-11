import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { iziOption } from '../main';

export function markup(data) {
  let { hits } = data;
  const box = document.querySelector('.gallery');

  if (hits.length === 0) {
    iziToast.show({
      ...iziOption,
      message: 'Sorry, there are no images matching your search query. Please, try again!',
    });
    box.innerHTML = '';
    return;
  }


  const markup = hits
    .map(
      image => `
      <li class="gallery__item">
        <a class="gallery__link" href="${image.largeImageURL}">
          <img class="gallery__img" src="${image.webformatURL}" alt="${image.tags}" />
          <div class="info">
            <p><strong>Likes:</strong> <span>${image.likes}</span></p>
            <p><strong>Views:</strong> <span>${image.views}</span></p>
            <p><strong>Comments:</strong> <span>${image.comments}</span></p>
            <p><strong>Downloads:</strong> <span>${image.downloads}</span></p>
          </div>
        </a>
      </li>`
    )
    .join('');


  box.innerHTML = markup;


  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}

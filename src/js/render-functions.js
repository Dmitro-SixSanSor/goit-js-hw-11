import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = null;

export function renderGallery(images, galleryElement) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <a href="${largeImageURL}" class="gallery-item">
            <img src="${webformatURL}" alt="${tags}" />
            <div class="info">
                <p><b>Likes:</b> ${likes}</p>
                <p><b>Views:</b> ${views}</p>
                <p><b>Comments:</b> ${comments}</p>
                <p><b>Downloads:</b> ${downloads}</p>
            </div>
        </a>
    `).join('');

    galleryElement.innerHTML = markup;

    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
        });
    } else {
        lightbox.refresh();
    }
}
export function clearGallery(galleryElement) {
    galleryElement.innerHTML = '';
}
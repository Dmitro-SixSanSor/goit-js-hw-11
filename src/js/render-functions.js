import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = null;

export function renderGallery(images, galleryElement) {
    console.log('Images to render:', images);

    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <div class="photo-card">
            <a href="${largeImageURL}" class="gallery-link">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes</b><span>${likes}</span></p>
                <p class="info-item"><b>Views</b><span>${views}</span></p>
                <p class="info-item"><b>Comments</b><span>${comments}</span></p>
                <p class="info-item"><b>Downloads</b><span>${downloads}</span></p>
            </div>
        </div>
    `).join('');

    galleryElement.insertAdjacentHTML("beforeend", markup);

    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
        });
        console.log("✅ Lightbox ініціалізований!");
    } else {
        lightbox.refresh();
        console.log("🔄 Lightbox оновлено!");
    }
}

export function clearGallery(galleryElement) {
    galleryElement.innerHTML = '';
}

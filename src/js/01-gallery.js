// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
export { galleryItems };
console.log(galleryItems);

const containerGallery = document.querySelector('.js-gallery');

const cardsGallery = galleryItems
  .map(
    item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}" data-caption="${item.description}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" >
      </a>
    </li>
  `,
  )
  .join('');

containerGallery.innerHTML = cardsGallery;

const galleryLightbox = new SimpleLightbox('.js-gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  showCounter: false,
});

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const div = document.querySelector(".gallery");

const img = galleryItems
  .map(
    (image) =>
      `
    <a class="gallery__item" href=${image.original}>
      <img
        class="gallery__image"
        src=${image.preview}
        
        alt="${image.description}"
      />
    </a>
  `
  )
  .join("");
div.insertAdjacentHTML("beforeend", img);

const lightbox = new SimpleLightbox(`.gallery a`, {
  disableRightClick: true,
  captionsData: "alt",
  captionDelay: 250,
});
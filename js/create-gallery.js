import gallery from './gallery-items.js';

const ref = {
  galeryList: document.querySelector('.js-gallery'),
  modalCase: document.querySelector('.lightbox')
}

const makeGalleryList = templateItemGallery(gallery);
ref.galeryList.insertAdjacentHTML('beforeend', makeGalleryList)

ref.galeryList.addEventListener('click', openModal)

function templateItemGallery(gallery) {
  return gallery.map(({ preview, original, description }) => {
    return `
  <li class="gallery__item">
    <a
      class="gallery__link"
      href=${original}
      >
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
      />
    </a>
  </li>`
  }).join(' ');
};

function openModal (event){
  if (!event.target.classList.contains('gallery__item')) {
    return;
  }
  
  console.log(event.target);
  // elent.target.classList.add('is-open')
}
 
import gallery from './gallery-items.js';

const ref = {
  galeryList: document.querySelector('.js-gallery'),
  modalCase: document.querySelector('.lightbox'),
  closedModalbatton: document.querySelector('[data-action="close-lightbox"]'),
  currentImage: document.querySelector('.lightbox__image'),
  beckDrop: document.querySelector('.lightbox__overlay')
}

const makeGalleryList = templateItemGallery(gallery);
ref.galeryList.insertAdjacentHTML('beforeend', makeGalleryList)

ref.galeryList.addEventListener('click', openModal)
ref.closedModalbatton.addEventListener('click', closedModal)
ref.beckDrop.addEventListener('click', closedModal)

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

function openModal(event) {
  ref.currentImage.setAttribute('crs', ' ');
  event.preventDefault();
  window.addEventListener('keydown', onEscDown);

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  ref.modalCase.classList.add('is-open');
  ref.currentImage.src = event.target.dataset.source;
  ref.currentImage.alt = event.target.alt;
};

function closedModal() {
  window.removeEventListener('keydown', onEscDown);
  ref.modalCase.classList.remove('is-open');
  
}

function onEscDown(event) {
  if (event.code === 'Escape') {
    closedModal();
  }
}
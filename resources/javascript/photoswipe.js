import PhotoSwipeLightbox from './photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('./photoswipe/photoswipe.esm.js')
});
lightbox.init();
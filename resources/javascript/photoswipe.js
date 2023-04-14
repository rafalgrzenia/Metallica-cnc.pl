import PhotoSwipeLightbox from './photoswipe/photoswipe-lightbox.esm.min.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('./photoswipe/photoswipe.esm.min.js')
});
lightbox.init();
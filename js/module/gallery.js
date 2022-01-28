export default function initGallery() {
    const navGallery = document.querySelectorAll('[data-galleryNav] li');
    const images = document.querySelectorAll('[data-gallery] div');

    if(navGallery.length && images.length) {
        images[0].classList.add('active');
        navGallery[0].classList.add('active-nav');

        function eventClickImages(index) {
            navGallery.forEach((item) => {
                item.classList.remove('active-nav');
            })
            images.forEach((item) => {
                item.classList.remove('active');
            })
            images[index].classList.add('active');
            navGallery[index].classList.add('active-nav')
        }
    
        navGallery.forEach((item, index) => {
            item.addEventListener('click', () => eventClickImages(index));
        });
    }
}
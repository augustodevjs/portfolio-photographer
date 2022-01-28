export default function menuHamburguer() {
    const btnMobile = document.querySelector('[data-btn="mobile"]');

    function toogleMenu(event) {
        if(event.type === 'touchstart') {
            event.preventDefault();
        }
        const nav = document.querySelector('nav');
        nav.classList.toggle(btnMobile.dataset.btn);
    }

    btnMobile.addEventListener('click', toogleMenu);
    btnMobile.addEventListener('touchstart', toogleMenu);
}


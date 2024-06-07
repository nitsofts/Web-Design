document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    hamburger.addEventListener('click', function () {
        mobileNav.classList.toggle('show');
    });
});

const redirects = {
    '/home': '/html/index.html',
    '/about': '/html/about.html',
    '/services': '/html/services.html',
    '/gallery': '/html/gallery.html',
    '/partner': '/html/partner.html',
    '/career': '/html/career.html',
    '/testimonial': '/html/testimonial.html',
    '/contact': '/html/contact.html'
};

const path = window.location.pathname;
if (redirects[path]) {
    window.location.replace(redirects[path]);
}

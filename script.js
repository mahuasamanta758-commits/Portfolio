
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.right');  // menu container
const navLinks = document.querySelectorAll('.right ul li a');

// Toggle menu
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');  // change icon
    navbar.classList.toggle('active');   // show/hide menu
});

// Auto-close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');  // hide menu
            menuIcon.classList.remove('bx-x');  // reset icon
        }
    });
});




let sections = document.querySelectorAll('section');
// let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
document.addEventListener("DOMContentLoaded", () => {
    const fills = document.querySelectorAll(".progress-fill");
    fills.forEach(fill => {
        const percent = fill.getAttribute("data-percent");
        setTimeout(() => {
            fill.style.width = percent + "%";
        }, 300);
    });
});



ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 50
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.rightsection, .service-container, .project-box, .contact form, .box-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.service-img, .skill-img ', { origin: 'right' });
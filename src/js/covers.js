const sectionCovers = document.querySelector('.section-covers');
let animateImg = document.querySelectorAll('.img-covers');

let observer = new IntersectionObserver(
    entries => {
    const shouldAnimate = entries.find(entry => entry.isIntersecting);

    animateImg.forEach(img => {
        if (shouldAnimate) {
            img.classList.add('animate');
        } else {
            img.classList.remove('animate');
        }
    });
}, { threshold: 0.01, });

observer.observe(sectionCovers);








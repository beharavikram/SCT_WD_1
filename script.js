window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scroll-active', window.scrollY > 0);
});

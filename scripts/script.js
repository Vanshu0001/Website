// Page Loader
window.onload = function() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none'; 
};

// Smooth Scrolling
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
};

document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.hash) {
            e.preventDefault();
            smoothScroll(this.hash);
        }
    });
});

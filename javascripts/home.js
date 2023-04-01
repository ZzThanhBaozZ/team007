// Set balanced height for two wrapper on window width's changes
function updateHeights() {
    if (window.matchMedia("(min-width: 64em)").matches) {
        const query_subpages = document.querySelector('.query-subpages');
        const websites = document.querySelector('.websites');

        websites.style.height = `${query_subpages.clientHeight}px`;

        const web_wrap = document.querySelectorAll('.web-wrap');

        web_wrap.forEach((element) => {
        element.style.height = `${query_subpages.clientHeight / 4}px`;
        });
    }
}

window.addEventListener('load', () => {
    updateHeights();    
});

window.addEventListener('resize', () => {
    updateHeights();
});

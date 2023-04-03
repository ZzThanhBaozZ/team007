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


var box = document.getElementById('box');
var isHidden = true;
function toggleNoti(){
    if (isHidden) {
        box.style.display = 'block'; // Đặt giá trị của thuộc tính display thành 'block' để hiển thị phần tử
        isHidden = false;
    } else {
        box.style.display = 'none'; // Đặt giá trị của thuộc tính display thành 'none' để ẩn phần tử
        isHidden = true;
    }
}
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


var mnc = document.getElementById('mnc');
var click_on = false;
var originalMaxHeight = mnc.style.maxHeight; // Lưu giá trị ban đầu vào biến khác
function toggleExpand(){
    if (click_on) {
        mnc.style.maxHeight = originalMaxHeight; // Sử dụng giá trị ban đầu để khôi phục
        const toggleExpandNotiTypo = document.querySelector('.toggle-expand-noti-typo');
        toggleExpandNotiTypo.textContent = 'Hiển thị tất cả thông báo';
        click_on = false;
    } else {
        mnc.style.maxHeight = 'none';
        const toggleExpandNotiTypo = document.querySelector('.toggle-expand-noti-typo');
        toggleExpandNotiTypo.textContent = 'Rút gọn thông báo';
        click_on = true;
    }
}
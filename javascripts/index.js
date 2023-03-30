var box  = document.getElementById('box')
var down = false;
function toggleNoti(){
    if (down) {
        box.style.height = '0px';
        box.style.opacity = 0;
        down = false;
    }
    else{
        box.style.height = '500px';
        box.style.opacity = 1;
        down = true;
    }
}
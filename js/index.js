function dropDownMenu() {
    var menu = document.getElementById("dropDownMenu").classList;
    menu.toggle("d-block");
    menu.toggle("d-none");
}

function themeToggle() {
    var icon = document.getElementById("toggleIcon").classList;
    var themeBody = document.getElementsByTagName("body")[0].classList;
    themeBody.toggle("darkTheme");
    if(themeBody.contains("darkTheme")) {
        icon.replace("fa-moon", "fa-sun");
    } else {
        icon.replace("fa-sun", "fa-moon");
    }
}

//xác định header
var header = document.getElementsByTagName("header")[0];

function myBackToTopFunc() {
    //cuộn lên top khi click
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    );
}

//xử lý cuộn
window.onscroll = function () {
    //DOM đến nút back to top
    var theBtn = document.getElementById("backToTopBtn");
    //Xác định vị trí đang cuộn
    var windowsOffset = window.pageYOffset;
    //nếu cuộn lên top thì add class remove nút đi
    if (windowsOffset === 0) {
        theBtn.className = "";
    }
    //nếu cuộn xuống 300px thì đổi class thành hiện
    if(windowsOffset >= 300) {
        theBtn.className = "showBtoTop";
    }
    //nếu cuộn quá 700px thì add class làm mờ
    if(windowsOffset >= 700) {
        theBtn.className = "blurBtoTop"
    }

    //OffsetHeader
    //nếu cuộn quá header thì add class, ngược lại thì remove
    if(window.pageYOffset > header.offsetTop) {
        header.classList.add("offsetHeader");
    }
    else {
        header.classList.remove("offsetHeader");
    }
}


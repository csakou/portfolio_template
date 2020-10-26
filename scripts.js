window.onload = function() {responsiveScrollFunction()};
window.onresize = function() {responsiveScrollFunction()};

let nav_button_active;
let nav_items_list = document.getElementsByClassName("nav-item");

function responsiveScrollFunction() {
    if(window.innerWidth >= 900) {
        document.getElementById("navbar").style.height = "70px";
        document.getElementById("navbar").style.opacity = 1;
        document.getElementById("navbar").style.transform = "translateX(0)";
        nav_button_active = false;

        for (let i=0; i < nav_items_list.length; i++) {
            nav_items_list[i].style.opacity = 1;
        }

        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("navbar").style.height = "40px";
            }
            else {
                document.getElementById("navbar").style.height = "70px";
            }
        }
    }
    else {
        document.getElementById("navbar").style.height = "100%";
        document.getElementById("navbar").style.opacity = 0;
        document.getElementById("navbar").style.transform = "translateX(-150)";
        for (let i=nav_items_list.length-1; i >= 0; i--) {
            nav_items_list[i].style.opacity = 0;
        }
        window.onscroll = function() {};
    }
}

document.getElementById('nav-button').onclick = function() {navFunction()};

function navFunction() {
    let interval = 100;
    let promise = Promise.resolve();

    if (nav_button_active === false) {
        document.getElementById("navbar").style.opacity = 1;
        document.getElementById("navbar").style.transform = "translateX(0)";
        for (let i=0; i < nav_items_list.length; i++) {
            promise = promise.then(function () {
                nav_items_list[i].style.opacity = 1;
                return new Promise(function (resolve) {
                    setTimeout(resolve, interval);
                });
            });
        }
        nav_button_active = true;
    }
    else {
        document.getElementById("navbar").style.opacity = 0;
        document.getElementById("navbar").style.transform = "translateX(-150px)";
        for (let i=nav_items_list.length-1; i >= 0; i--) {
            nav_items_list[i].style.opacity = 0;
        }
        nav_button_active = false;
    }
}
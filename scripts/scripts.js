window.onload = function() {initDoc()};

let nav_button_active;
let project_list;
let project_buttons_list = [];
let project_active_buttons = [];


function initDoc() {
    window.onresize = function() {responsiveScrollFunction()};
    console.log(1);
    nav_items_list = document.getElementsByClassName("nav-item");
    project_list = document.getElementsByClassName("project-tile");
    project_buttons_list = document.getElementsByClassName("project-button");
    project_active_buttons.length = project_list.length;
    project_active_buttons.fill(false);
    nav_button_active = false;

    responsiveScrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").classList.add("nav-scrolled");
    }
    else {
        document.getElementById("navbar").classList.remove("nav-scrolled");
    }
} 

function setDocForBigScreens() {
        window.onscroll = function() {scrollFunction()};
        
        document.getElementById("navbar").style.opacity = 1;
        
        nav_button_active = false;

        for (let i=0; i < nav_items_list.length; i++) {
            nav_items_list[i].style.opacity = 1;
        }

        for (let i=0; i < project_active_buttons.length; i++) {
            project_list[i].classList.remove("project-button-pressed");
            project_buttons_list[i].style.transform = "rotate(0deg)";
            project_active_buttons[i] = false;
        }
}

function setDocForSmallScreens() {
    window.onscroll = function() {};

    document.getElementById("navbar").style.opacity = 0;
    document.getElementById("navbar").classList.remove("nav-scrolled");

    for (let i=nav_items_list.length-1; i >= 0; i--) {
        nav_items_list[i].style.opacity = 0;
    }
}

function responsiveScrollFunction() {
    if(window.innerWidth >= 900) {
        setDocForBigScreens();
    }
    
    if(window.innerWidth < 900) {
        setDocForSmallScreens();
    }
}

function navButtonFunction() {
    let interval = 100;
    let promise = Promise.resolve();

    if (nav_button_active === false) {
        document.getElementById("navbar").style.opacity = 1;
        document.getElementById("nav-button").classList.add("nav-button-active");
        
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
        document.getElementById("nav-button").classList.remove("nav-button-active");

        for (let i=nav_items_list.length-1; i >= 0; i--) {
            nav_items_list[i].style.opacity = 0;
        }

        nav_button_active = false;
    }
}

function projectButtonFunction(index) {
    let project_index = parseInt(index) - 1;
    
    if (project_active_buttons[project_index] === false) {
        project_list[project_index].classList.add("project-tile-open");
        project_buttons_list[project_index].style.transform = "rotate(180deg)";
        project_buttons_list[project_index].classList.add("project-button-active");
        project_active_buttons[project_index] = true;
    }
    else if(project_active_buttons[project_index] === true) {
        project_list[project_index].classList.remove("project-tile-open");
        project_buttons_list[project_index].style.transform = "rotate(0)";
        project_buttons_list[project_index].classList.remove("project-button-active");
        project_active_buttons[project_index] = false;
    }
}
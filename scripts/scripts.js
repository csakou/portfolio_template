window.onload = function() {initDoc()};

let nav_button_active;
let project_list;
let project_buttons_list = [];
let project_active_buttons = [];


function initDoc() {
    window.onresize = function() {responsiveFunction()};
    nav_items_list = document.getElementsByClassName("nav-item");
    project_list = document.getElementsByClassName("project-tile");
    project_buttons_list = document.getElementsByClassName("project-button");
    project_active_buttons.length = project_list.length;
    project_active_buttons.fill(false);
    nav_button_active = false;

    responsiveFunction();
}

function setDocForBigScreens() {
        document.getElementById("navbar").style.top = 0;
        document.getElementById("nav-button").classList.remove("nav-button");
        document.getElementById("nav-button").classList.remove("nav-button-active");
        
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

function responsiveFunction() {
    if(window.innerWidth >= 900) {
        setDocForBigScreens();
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
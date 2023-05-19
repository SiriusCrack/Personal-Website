const my_image = document.querySelector("img");

my_image.onclick = () => {
    if(my_image.getAttribute("src") === "images/my_image.jpg") {
        my_image.setAttribute("src", "images/my_image2.jpg");
    } else {
        my_image.setAttribute("src", "images/my_image.jpg");
    }
};

let my_button = document.querySelector("button");
let my_heading = document.querySelector("h1");

function set_user_name() {
    const my_name = prompt("Please enter your name.");
    if(!my_name) {
        set_user_name();
    } else {
        localStorage.setItem("name", my_name);
        my_heading.textContent = `Nice, ${my_name}`;
    }
}

if(!localStorage.getItem("name")) {
    set_user_name();
} else {
    const stored_name = localStorage.getItem("name");
    my_heading.textContent = `Nice, ${stored_name}`;
}

my_button.onclick = () => {
    set_user_name();
}
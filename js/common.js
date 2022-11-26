/**
 * @author Ushan Shanilka <ushanshanilka80@gmail.com>
 * @since 11/26/2022
 **/


let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };

    });

}

function menuToggle(){
    let toggleMenu = document.querySelector('.profileMenu');
    toggleMenu.classList.toggle('active')
}


window.onload = function () {
    // localStorage.setItem("auth", "ushan");
    let username = document.getElementById("user-name");
    let email = document.getElementById("email");
    let logoutBtn = document.getElementById("logout-btn");
    let loginBtn = document.getElementById("login-btn");
    let item = localStorage.getItem("auth");
    if (item == null){
        username.style.display='none'
        email.style.display='none'
        logoutBtn.style.display='none'
    }else {
        loginBtn.style.display='none'
        username.innerHTML  = "ushan"
    }
}

function logout(){
    localStorage.removeItem("auth");
}

function log(){
    url = 'https://supermarket-lk.000webhostapp.com/login.html';
    document.location.href = url;
}

function productView(id) {
    console.log(id)
    // var b = document.getElementById('name').value,
    url = 'https://supermarket-lk.000webhostapp.com/product-view.html?name=' + encodeURIComponent(id);

    document.location.href = url;
}

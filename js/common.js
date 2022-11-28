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
                // document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
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
    let cartBtn = document.getElementById("cart-btn");
    let localEmail = sessionStorage.getItem("email");
    let localUserName = sessionStorage.getItem("username");
    if (localEmail == null && localUserName == null){
        username.style.display='none'
        email.style.display='none'
        logoutBtn.style.display='none'
        cartBtn.style.display='none'
    }else {
        loginBtn.style.display='none'
        username.innerHTML  = localUserName
        email.innerHTML  = localEmail
    }
}

function logout(){
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
}

function log(){
    url = 'http://localhost:63342/Supermarket-frontend/login.html';
    document.location.href = url;
}

function cart(){
    url = 'http://localhost:63342/Supermarket-frontend/shopping-cart.html?_ijt=nki6vr7t9p83k2enaa01da27k';
    document.location.href = url;
}

function productView(id) {
    console.log(id)
    // var b = document.getElementById('name').value,
    url = 'http://localhost:63342/Supermarket-frontend/product-view.html?id=' + encodeURIComponent(id);

    document.location.href = url;
}

/*custom*/

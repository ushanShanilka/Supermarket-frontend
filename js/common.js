/**
 * @author Ushan Shanilka <ushanshanilka80@gmail.com>
 * @since 11/26/2022
 **/

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
    url = 'http://localhost:63342/Supermarket-frontend/login.html';
    document.location.href = url;
}

function productView(id) {
    console.log(id)
    // var b = document.getElementById('name').value,
    url = 'http://localhost:63342/Supermarket-frontend/product-view.html?name=' + encodeURIComponent(id);

    document.location.href = url;
}

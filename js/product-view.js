/**
 * @author Ushan Shanilka <ushanshanilka80@gmail.com>
 * @since 11/25/2022
 **/
window.onload = function () {

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

    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    if (data.id !== undefined){
        getProduct(data.id);
    }else {
        console.log(undefined)
    }
    // document.getElementById('here').innerHTML = data.name;
}


let mainImage = document.getElementById('main-image');
let productName = document.getElementById('product-name');
let price = document.getElementById('price');
let desc = document.getElementById('desc');
function clickImage(url){
    console.log(url)
    mainImage.src = url;
}

var obj = {};
var images = [];

var smallRow = document.getElementById("small-row");

function getProduct(id){
    $.ajax({
        method:'GET',
        url:`http://localhost:8080/api/v1/products/${id}`,

        success:function (response) {
            if (response.code === 200){
                obj = response.data
                images = [];
                var len = response.data.images.length;
                for (var i = 0; i < len; i++) {
                    images.push({
                        url: response.data.images[i].url,
                    });
                }
                console.log(images)
                loadData();

            }else {
            }
        },
        error:function (response) {
            console.log(response)
        }
    })
}


function loadData(){
    console.log(obj)
    smallRow.innerHTML = '';
    console.log(images[0].url)
    mainImage.src = images[0].url;
    productName.innerText = obj.name +" / "+ obj.size
    price.innerText =`Rs. ${obj.price}`
    desc.innerText = obj.description
    images.map(val =>{
        smallRow.insertAdjacentHTML('beforeend', `<div class="small-img-col"> <img onclick="clickImage(this.src)" src="${val.url}" class="small-img"> </div>`);
    })
}

function addToCart(){

    console.log(sessionStorage.getItem("jwt"))
    if (sessionStorage.getItem("jwt") !== null){
        var url = document.location.href,
            params = url.split('?')[1].split('&'),
            data = {}, tmp;
        for (var i = 0, l = params.length; i < l; i++) {
            tmp = params[i].split('=');
            data[tmp[0]] = tmp[1];
        }
        let qty = $('#qty').val();
        console.log(qty)
        console.log(data.id)

        console.log(`Bearer ${sessionStorage.getItem("jwt")}`)

        $.ajax({
            method:'POST',
            url:'http://localhost:8080/api/v1/shopping/bags',
            contentType:'application/json',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`,
            },
            async:true,
            data:JSON.stringify({
                productId: data.id,
                quantity: qty
            }),

            success:function (response) {
                console.log(response)
                if (response.code === 201){
                    navigateToCart();
                }
            },
            error:function (response) {
                console.log(response)
                msgboxNoClose.show(response.responseJSON.message);
            }
        })
    }else {
        console.log("missing token")
    }
}


function navigateToCart() {
    url = 'http://localhost:63342/Supermarket-frontend/shopping-cart.html?_ijt=btrl63nisoev6hf7vmj4erb3jo';

    document.location.href = url;
}

/**
 * @author Ushan Shanilka <ushanshanilka80@gmail.com>
 * @since 11/26/2022
 **/
/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00;
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
    updateQuantity(this);
});

$('.product-removal button').click( function() {
    removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
    var subtotal = 0;

    /* Sum up row totals */
    $('.product').each(function () {
        subtotal += parseFloat($(this).children('.product-line-price').text());
    });

    /* Calculate totals */
    var tax = subtotal * taxRate;
    var shipping = (subtotal > 0 ? shippingRate : 0);
    var total = subtotal + tax + shipping;

    /* Update totals display */
    $('.totals-value').fadeOut(fadeTime, function() {
        $('#cart-subtotal').html(subtotal.toFixed(2));
        $('#cart-tax').html(tax.toFixed(2));
        $('#cart-shipping').html(shipping.toFixed(2));
        $('#cart-total').html(total.toFixed(2));
        if(total == 0){
            $('.checkout').fadeOut(fadeTime);
        }else{
            $('.checkout').fadeIn(fadeTime);
        }
        $('.totals-value').fadeIn(fadeTime);
    });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
    /* Calculate line price */
    var productRow = $(quantityInput).parent().parent();
    var price = parseFloat(productRow.children('.product-price').text());
    var quantity = $(quantityInput).val();
    var linePrice = price * quantity;

    /* Update line price display and recalc cart totals */
    productRow.children('.product-line-price').each(function () {
        $(this).fadeOut(fadeTime, function() {
            $(this).text(linePrice.toFixed(2));
            recalculateCart();
            $(this).fadeIn(fadeTime);
        });
    });
}
var productSec = document.getElementById("product-sec");


// /* Remove item from cart */
// function removeItem(id) {
//     productSec.innerHTML = '';
//     getAllCartProduct()
//     recalculateCart();
//
//     // console.log(id.innerHTML)
//     /* Remove row from DOM and recalc cart total */
//     // var productRow = $(product).parent().parent();
//     // productRow.slideUp(fadeTime, function() {
//     //     productRow.remove();
//     //     getAllCartProduct()
//     //     recalculateCart();
//     // });
// }

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
    if (sessionStorage.getItem("jwt") !== null){
        getAllCartProduct();

    }else {
        console.log("token missing")
    }
}


var arr = [];

function getAllCartProduct(){
    $.ajax({
        method:'GET',
        url:`http://localhost:8080/api/v1/shopping/bags`,
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`,
        },

        success:function (response) {
            if (response.code === 200){
                productSec.innerHTML = '';
                arr = [];
                console.log(response.data.length)
                var len = response.data.length;
                for (var i = 0; i < len; i++) {
                    arr.push({
                        id: response.data[i].id,
                        image:  response.data[i].image,
                        name:  response.data[i].name,
                        description:  response.data[i].description,
                        price:  response.data[i].price,
                        qty:  response.data[i].qty
                    });
                }
                console.log(arr)
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
    arr.map(val =>{
        productSec.insertAdjacentHTML('beforeend', `<div class="product"> <div class="product-image"> <img src="${val.image}"> </div> <div class="product-details"> <div class="product-title">${val.name}</div> <p class="product-description">${val.description}</p> </div> <div class="product-price">${val.price}</div> <div class="product-quantity"> <input type="number" value="${val.qty}" min="1"> </div> <div class="product-removal"> <button onclick="removeProductFromShoppingBag(${val.id})" class="remove-product"> Remove </button> </div> <div class="product-line-price">${val.price * val.qty}</div> </div>`);
    })
    recalculateCart();
}


class MessageBox {
    constructor(option) {
        this.option = option;

        this.msgBoxArea = document.querySelector("#msgbox-area");

        if (this.msgBoxArea === null) {
            this.msgBoxArea = document.createElement("DIV");
            this.msgBoxArea.setAttribute("id", "msgbox-area");
            this.msgBoxArea.classList.add("msgbox-area");

            document.body.appendChild(this.msgBoxArea);
        }
    }

    show(msg, callback, closeLabel) {
        if (msg === "" || msg === undefined || msg === null) {
            // If the 'msg' parameter is not set, throw an error

            throw "Message is empty or not defined.";
        }

        if (closeLabel === undefined || closeLabel === null) {
            // Of the close label is undefined, or if it is null

            closeLabel = "Close";
        }

        const option = this.option;

        const msgboxBox = document.createElement("DIV");
        const msgboxContent = document.createElement("DIV");
        const msgboxCommand = document.createElement("DIV");
        const msgboxClose = document.createElement("A");

        // Content area of the message box
        msgboxContent.classList.add("msgbox-content");
        msgboxContent.innerText = msg;

        // Command box or the button container
        msgboxCommand.classList.add("msgbox-command");

        // Close button of the message box
        msgboxClose.classList.add("msgbox-close");
        msgboxClose.setAttribute("href", "#");
        msgboxClose.innerText = closeLabel;

        // Container of the Message Box element
        msgboxBox.classList.add("msgbox-box");
        msgboxBox.appendChild(msgboxContent);

        if (option.hideCloseButton === false
            || option.hideCloseButton === undefined) {
            // If the hideCloseButton flag is false, or if it is undefined

            // Append the close button to the container
            msgboxCommand.appendChild(msgboxClose);
            msgboxBox.appendChild(msgboxCommand);
        }

        this.msgBoxArea.appendChild(msgboxBox);

        msgboxClose.onclick = (evt) => {
            evt.preventDefault();

            if (msgboxBox.classList.contains("msgbox-box-hide")) {
                return;
            }

            clearTimeout(this.msgboxTimeout);

            this.msgboxTimeout = null;

            this.hide(msgboxBox, callback);
        };

        if (option.closeTime > 0) {
            this.msgboxTimeout = setTimeout(() => {
                this.hide(msgboxBox, callback);
            }, option.closeTime);
        }
    }

    hideMessageBox(msgboxBox) {
        return new Promise(resolve => {
            msgboxBox.ontransitionend = () => {
                resolve();
            };
        });
    }

    async hide(msgboxBox, callback) {
        if (msgboxBox !== null) {
            // If the Message Box is not yet closed

            msgboxBox.classList.add("msgbox-box-hide");
        }

        await this.hideMessageBox(msgboxBox);

        this.msgBoxArea.removeChild(msgboxBox);

        clearTimeout(this.msgboxTimeout);

        if (typeof callback === "function") {
            // If the callback parameter is a function

            callback();
        }
    }
}

const msgboxNoClose = new MessageBox({
    closeTime: 5000,
    hideCloseButton: true
});

function removeProductFromShoppingBag(id){
    $.ajax({
        method:'DELETE',
        url:`http://localhost:8080/api/v1/shopping/bags/${id}`,
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`,
        },

        success:function (response) {
            if (response.code === 200){
                msgboxNoClose.show(response.message);
                getAllCartProduct()
            }
        },
        error:function (response) {
            console.log(response)
        }
    })
}

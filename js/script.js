/**
 * @author Ushan Shanilka <ushanshanilka80@gmail.com>
 * @since 11/24/2022
 **/
var swiper = new Swiper(".home-slider", {
    spaceBetween: 120,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var secOne = document.getElementById("sec-one");
var secTwo = document.getElementById("sec-two");
var box = document.getElementById("popular-product");


// $('#btn-product').click(function (){
//     console.log("hello")
//
//     main.insertAdjacentHTML('beforeend', '<div class="box" id="popular-product"> <img src="" alt=""> <h3>tasty food</h3> <div class="stars"> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star-half-alt"></i> </div><span>$15.99</span> <a class="btn" onclick="productView(20)">View More</a> </div>');
// });

var arr = [];


getRandomProduct01();
function getRandomProduct01(){
    $.ajax({
        method:'GET',
        url:`http://localhost:8080/api/v1/products/rand`,

        success:function (response) {
            if (response.code === 200){
                arr = [];
                var len = response.data.list.length;
                for (var i = 0; i < len; i++) {
                    arr.push({
                        id: response.data.list[i].id,
                        image:  response.data.list[i].image,
                        name:  response.data.list[i].name,
                        rating:  response.data.list[i].rating,
                        price:  response.data.list[i].price
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

loadData();
function loadData(){
    secOne.innerHTML = '';
    arr.map(val =>{
        secOne.insertAdjacentHTML('beforeend', `<div class="box" id="popular-product"> <img src="${val.image}" alt=""> <h3>${val.name}</h3> <div class="stars"></div><span>Rs. ${val.price}</span> <a class="btn" onclick="productView(${val.id})">View More</a> </div>`);
    })
}

var arr1 = [];

getRandomProduct02();
function getRandomProduct02(){
    $.ajax({
        method:'GET',
        url:`http://localhost:8080/api/v1/products/rand`,

        success:function (response) {
            if (response.code === 200){
                arr1 = [];
                var len = response.data.list.length;
                for (var i = 0; i < len; i++) {
                    arr1.push({
                        id: response.data.list[i].id,
                        image:  response.data.list[i].image,
                        name:  response.data.list[i].name,
                        rating:  response.data.list[i].rating,
                        price:  response.data.list[i].price
                    });
                }
                console.log(arr1)
                loadData2();
            }else {
            }
        },
        error:function (response) {
            console.log(response)
        }
    })
}

loadData2();
function loadData2(){
    secTwo.innerHTML = '';
    arr1.map(val =>{
        secTwo.insertAdjacentHTML('beforeend', `<div class="box" id="popular-product"> <img src="${val.image}" alt=""> <h3>${val.name}</h3> <div class="stars"></div><span>Rs. ${val.price}</span> <a class="btn" onclick="productView(${val.id})">View More</a> </div>`);
    })
}

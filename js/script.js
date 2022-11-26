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

var main = document.getElementById("main");
var box = document.getElementById("popular-product");


$('#btn-product').click(function (){
    console.log("hello")

    main.insertAdjacentHTML('beforeend', '<div class="box" id="popular-product"> <img src="" alt=""> <h3>tasty food</h3> <div class="stars"> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star-half-alt"></i> </div><span>$15.99</span> <a class="btn" onclick="productView(20)">View More</a> </div>');
});




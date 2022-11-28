/**
 * @author Ushan Shanilka <ushanshanilka80@gmail.com>
 * @since 11/25/2022
 **/
var main = document.getElementById("main");

function searchProduct(value) {
    getAllProduct(value)
    loadData()
}
var arr = [];

loadData();
function loadData(){
    main.innerHTML = '';
    arr.map(val =>{
        main.insertAdjacentHTML('beforeend', `<div class="box" id="popular-product"> <img src="${val.image}" alt=""> <h3>${val.name}</h3> <div class="stars"></div><span>Rs. ${val.price}</span> <a class="btn" onclick="productView(${val.id})">View More</a> </div>`);
    })
}


getAllProduct(" ");

function getAllProduct(value){
    $.ajax({
        method:'GET',
        url:`http://localhost:8080/api/v1/products/search?value=${value}`,

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


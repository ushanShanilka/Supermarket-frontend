/**
 * @author Ushan Shanilka <ushanshanilka80@gmail.com>
 * @since 11/25/2022
 **/
window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }

    console.log(data.name)
    // document.getElementById('here').innerHTML = data.name;
}
var ProductImg =document.getElementById("ProductImg");
function clickImage(url){
    console.log(url)
    ProductImg.src = url;
}

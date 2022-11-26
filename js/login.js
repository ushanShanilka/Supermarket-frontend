/**
 * @author Ushan Shanilka <ushanshanilka80@gmail.com>
 * @since 11/26/2022
 **/
var SingUp = document.getElementById("singUpForm");
var Login = document.getElementById("singInForm");
// var Indicator = document.getElementById("indicator");

var SingInBtn = document.getElementById("sing-in");
var SingUpBtn = document.getElementById("sing-up");

function singUp () {
    SingUp.style.transform = "translateX(300px)";
    Login.style.transform = "translateX(300px)";
    // Indicator.style.transform = "translateX(-50px)";
    SingInBtn.style.background = ''
    SingUpBtn.style.background = '#FE633D'
    SingUpBtn.style.color = 'white'
    SingInBtn.style.color = 'black'
}
SingInBtn.style.background = '#FE633D'
SingInBtn.style.color = 'white'

function singIn () {
    SingUp.style.transform = "translateX(0px)";
    Login.style.transform = "translateX(0px)";
    // Indicator.style.transform = "translateX(100px)";
    SingInBtn.style.background = '#FE633D'
    SingInBtn.style.color = 'white'
    SingUpBtn.style.background = ''
    SingUpBtn.style.color = 'black'
}


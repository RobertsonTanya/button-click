
var login = true;

function changeText() {
    if(login){
        document.getElementById('login-btn').innerHTML = 'Logout';
        login = false;
    } else {
        document.getElementById('login-btn').innerHTML = 'Login';
        login = true;
    }
}

function removeBtn(elem) {
    elem.remove();
}

function likedBtn() {
    alert('Ninja was liked');
}
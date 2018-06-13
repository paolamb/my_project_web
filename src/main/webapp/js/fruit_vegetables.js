/*Parameters for the selection of fruits and vegetables in the dropzone*/

var i = 0;
var score = document.getElementById('score');
var Modelscore = document.getElementById('Modelscore');
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];
function mybtnclick() {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).ready(function () {
    $('#next').click(function () {
        $('#dropzone-apple').css("background-image", "url('" + frutas[i].iconfruit + "')");
    })
});

function imgClic(id, nombre) {

    if (nombre == frutas[i].name) {
        $('#dropzone-apple').css("background-image", "url('" + frutas[i].inconBackFruit + "')");
        $('#question').attr("src", "img/correct-green.png");
        $('#question').attr('class', "answer show");
        $('#' + id).attr('class', "icon answer hide");
        vibrar();
        sumariten();
        if (i < 9) {
            SigFruta = setTimeout(siguientefruta, 2000);
        }
        else {
            mybtnclick();
        }
    }
    else {

        $('#question').attr("src", "img/wrong-red.png");
        $('#question').attr('class', "answer show");
        if (i < 9) {
            SigFruta = setTimeout(siguientefruta, 2000);
        }
        else {
            mybtnclick();
        }
    }
}

function siguientefruta() {

    i++;
    $('#dropzone-apple').css("background-image", "url('" + frutas[i].iconfruit + "')");
    $('#question').attr('class', "answer hide");

}

$('#next').click(function () {

})


function sumariten() {
    score.innerHTML = parseInt(score.innerHTML) + 1;
    Modelscore.innerHTML = parseInt(Modelscore.innerHTML) + 1;
}

var start = function (e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('iconId', e.target.id);
    e.dataTransfer.setDragImage(e.target, 0, 0);
    return true;
}
var frutas = [
    { name: "apple", iconfruit: "img/apple-bg.png", inconBackFruit: "img/apple.png" },
    { name: "bananas", iconfruit: "img/bananas-bg.png", inconBackFruit: "img/bananas.png" },
    { name: "carrot", iconfruit: "img/carrot-bg.png", inconBackFruit: "img/carrot.png" },
    { name: "strawberry", iconfruit: "img/strawberry-bg.png", inconBackFruit: "img/strawberry.png" },
    { name: "pear", iconfruit: "img/pear-bg.png", inconBackFruit: "img/pear.png" },
    { name: "lemon", iconfruit: "img/lemon-bg.png", inconBackFruit: "img/lemon.png" },
    { name: "tomato", iconfruit: "img/tomato-bg.png", inconBackFruit: "img/tomato.png" },
    { name: "watermelon", iconfruit: "img/watermelon-bg.png", inconBackFruit: "img/watermelon.png" },
    { name: "cherries", iconfruit: "img/cherries-bg.png", inconBackFruit: "img/cherries.png" },
    { name: "grapes", iconfruit: "img/grapes-bg.png", inconBackFruit: "img/grapes.png" }
];
var enter = function (e) {
    return true;
}
function vibrar() {
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if (navigator.vibrate) {
        navigator.vibrate(1000);
    } else {
        alert('Tu navegador no soporta la api de vibración HTML5');
    }
}
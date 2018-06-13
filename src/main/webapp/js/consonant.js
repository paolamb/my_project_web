/* Parameters for the selection of vowels and consonants in the dropzone */

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
        
        $('#dropzone-consonant-X').css("background-image", "url('" + consonant[i].iconConsonant + "')");
    })
});

function imgClic(id, nombre) {

    if (nombre == consonants[i].name) {
        
        $('#dropzone-consonant-X').css("background-image", "url('" + consonants[i].inconBackConsonant + "')");
        $('#question').attr("src", "img/correct-green.png");
        $('#question').attr('class', "answer show");
        $('#' + id).attr('class', "icon answer hide");
        vibrar();
        sumariten();
        if (i < 25) {
            SigConsonant = setTimeout(siguienteConsonant, 2000);
        }
        else {
            mybtnclick();
        }
    }
    else {

        $('#question').attr("src", "img/wrong-red.png");
        $('#question').attr('class', "answer show");
        if (i < 25) {
            SigConsonant = setTimeout(siguienteConsonant, 2000);
        }
        else {
            mybtnclick();
        }
    }
}

function siguienteConsonant() {

    i++;
    $('#dropzone-consonant-X').css("background-image", "url('" + consonants[i].iconConsonant + "')");
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
var consonants = [
    { name: "consonant-X", iconConsonant: "img/consonant-X-bg.png", inconBackConsonant: "img/consonant-X.png" },
    { name: "consonant-W", iconConsonant: "img/consonant-W-bg.png", inconBackConsonant: "img/consonant-W.png" },
    { name: "vowel-Oo", iconConsonant: "img/vowel-Oo-bg.png", inconBackConsonant: "img/vowel-Oo.png" },
    { name: "consonant-P", iconConsonant: "img/consonant-P-bg.png", inconBackConsonant: "img/consonant-P.png" },
    { name: "consonant-J", iconConsonant: "img/consonant-J-bg.png", inconBackConsonant: "img/consonant-J.png" },
    { name: "consonant-D", iconConsonant: "img/consonant-D-bg.png", inconBackConsonant: "img/consonant-D.png" },
    { name: "consonant-Z", iconConsonant: "img/consonant-Z-bg.png", inconBackConsonant: "img/consonant-Z.png" },
    { name: "consonant-N", iconConsonant: "img/consonant-N-bg.png", inconBackConsonant: "img/consonant-N.png" },
    { name: "consonant-T", iconConsonant: "img/consonant-T-bg.png", inconBackConsonant: "img/consonant-T.png" },
    { name: "consonant-R", iconConsonant: "img/consonant-R-bg.png", inconBackConsonant: "img/consonant-R.png" },
    { name: "vowel-Ii", iconConsonant: "img/vowel-Ii-bg.png", inconBackConsonant: "img/vowel-Ii.png" },
    { name: "vowel-Uu", iconConsonant: "img/vowel-Uu-bg.png", inconBackConsonant: "img/vowel-Uu.png" },
    { name: "consonant-C", iconConsonant: "img/consonant-C-bg.png", inconBackConsonant: "img/consonant-C.png" },
    { name: "vowel-Ee", iconConsonant: "img/vowel-Ee-bg.png", inconBackConsonant: "img/vowel-Ee.png" },
    { name: "consonant-H", iconConsonant: "img/consonant-H-bg.png", inconBackConsonant: "img/consonant-H.png" },
    { name: "consonant-B", iconConsonant: "img/consonant-B-bg.png", inconBackConsonant: "img/consonant-B.png" },
    { name: "consonant-V", iconConsonant: "img/consonant-V-bg.png", inconBackConsonant: "img/consonant-V.png" },
    { name: "consonant-S", iconConsonant: "img/consonant-S-bg.png", inconBackConsonant: "img/consonant-S.png" },
    { name: "consonant-K", iconConsonant: "img/consonant-K-bg.png", inconBackConsonant: "img/consonant-K.png" },
    { name: "vowel-Aa", iconConsonant: "img/vowel-Aa-bg.png", inconBackConsonant: "img/vowel-Aa.png" },
    { name: "consonant-Q", iconConsonant: "img/consonant-Q-bg.png", inconBackConsonant: "img/consonant-Q.png" },
    { name: "consonant-L", iconConsonant: "img/consonant-L-bg.png", inconBackConsonant: "img/consonant-L.png" },
    { name: "consonant-F", iconConsonant: "img/consonant-F-bg.png", inconBackConsonant: "img/consonant-F.png" },
    { name: "consonant-G", iconConsonant: "img/consonant-G-bg.png", inconBackConsonant: "img/consonant-G.png" },
    { name: "consonant-M", iconConsonant: "img/consonant-M-bg.png", inconBackConsonant: "img/consonant-M.png" },
    { name: "consonant-Y", iconConsonant: "img/consonant-Y-bg.png", inconBackConsonant: "img/consonant-Y.png" }
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
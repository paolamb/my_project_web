
/*Parameters for the selection of the vowels in the dropzone*/

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
				$('#dropzone-vowel-E').css("background-image", "url('" + vowel[i].iconVowel + "')");
			})
		});

		function imgClic(id, nombre) {

			if (nombre == vowel[i].name) {
				$('#dropzone-vowel-E').css("background-image", "url('" + vowel[i].inconBackVowel + "')");
				$('#question').attr("src", "img/correct-green.png");
				$('#question').attr('class', "answer show");
				$('#' + id).attr('class', "icon answer hide");
				vibrar();
				sumariten();
				if (i < 9) {
					SigVowel = setTimeout(siguienteVowel, 2000);
				}
				else {
					mybtnclick();
				}
			}
			else {

				$('#question').attr("src", "img/wrong-red.png");
				$('#question').attr('class', "answer show");
				if (i < 9) {
					SigVowel = setTimeout(siguienteVowel, 2000);
				}
				else {
					mybtnclick();
				}
			}
		}

		function siguienteVowel() {

			i++;
			$('#dropzone-vowel-E').css("background-image", "url('" + vowel[i].iconVowel + "')");
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
		var vowel = [
			{ name: "vowel-E", iconVowel: "img/vowel-E-bg.png", inconBackVowel: "img/vowel-E.png" },
			{ name: "vowel-a2", iconVowel: "img/vowel-a2-bg.png", inconBackVowel: "img/vowel-a2.png" },
			{ name: "vowel-A", iconVowel: "img/vowel-A-bg.png", inconBackVowel: "img/vowel-A.png" },
			{ name: "vowel-i2", iconVowel: "img/vowel-i2-bg.png", inconBackVowel: "img/vowel-i2.png" },
			{ name: "vowel-O", iconVowel: "img/vowel-O-bg.png", inconBackVowel: "img/vowel-O.png" },
			{ name: "vowel-I", iconVowel: "img/vowel-I-bg.png", inconBackVowel: "img/vowel-I.png" },
			{ name: "vowel-U", iconVowel: "img/vowel-U-bg.png", inconBackVowel: "img/vowel-U.png" },
			{ name: "vowel-u2", iconVowel: "img/vowel-u2-bg.png", inconBackVowel: "img/vowel-u2.png" },
			{ name: "vowel-e2", iconVowel: "img/vowel-e2-bg.png", inconBackVowel: "img/vowel-e2.png" },
			{ name: "vowel-o2", iconVowel: "img/vowel-o2-bg.png", inconBackVowel: "img/vowel-o2.png" }
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
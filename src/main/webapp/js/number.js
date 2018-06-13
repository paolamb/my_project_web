/*Parameters for the selection of the numbers in the dropzone*/

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
				$('#dropzone-number3').css("background-image", "url('" + numbers[i].iconNumber + "')");
			})
		});

		function imgClic(id, nombre) {

			if (nombre == numbers[i].name) {
				$('#dropzone-number3').css("background-image", "url('" + numbers[i].inconBackNumber + "')");
				$('#question').attr("src", "img/correct-green.png");
				$('#question').attr('class', "answer show");
				$('#' + id).attr('class', "icon answer hide");
				vibrar();
				sumariten();
				if (i < 9) {
					SigNumero = setTimeout(siguienteNumero, 2000);
				}
				else {
					mybtnclick();

				}
			}
			else {

				$('#question').attr("src", "img/wrong-red.png");
				$('#question').attr('class', "answer show");
				if (i < 9) {
					SigNumero = setTimeout(siguienteNumero, 2000);
				}
				else {
					mybtnclick();
				}
			}
		}

		function siguienteNumero() {

			i++;
			$('#dropzone-number3').css("background-image", "url('" + numbers[i].iconNumber + "')");
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
		var numbers = [
			{ name: "number3", iconNumber: "img/number3-bg.png", inconBackNumber: "img/number3.png" },
			{ name: "number5", iconNumber: "img/number5-bg.png", inconBackNumber: "img/number5.png" },
            { name: "number1", iconNumber: "img/number1-bg.png", inconBackNumber: "img/number1.png" },
			{ name: "number8", iconNumber: "img/number8-bg.png", inconBackNumber: "img/number8.png" },
			{ name: "number10", iconNumber: "img/number10-bg.png", inconBackNumber: "img/number10.png" },
			{ name: "number7", iconNumber: "img/number7-bg.png", inconBackNumber: "img/number7.png" },
			{ name: "number4", iconNumber: "img/number4-bg.png", inconBackNumber: "img/number4.png" },
			{ name: "number6", iconNumber: "img/number6-bg.png", inconBackNumber: "img/number6.png" },
			{ name: "number2", iconNumber: "img/number2-bg.png", inconBackNumber: "img/number2.png" },
			{ name: "number9", iconNumber: "img/number9-bg.png", inconBackNumber: "img/number9.png" }
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
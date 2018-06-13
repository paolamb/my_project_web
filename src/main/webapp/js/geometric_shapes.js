
/*Parameters for the selection of the figures in the dropzone*/

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
				$('#dropzone-rectangle').css("background-image", "url('" + shape[i].iconShape + "')");
			})
		});

		function imgClic(id, nombre) {

			if (nombre == shape[i].name) {
				$('#dropzone-rectangle').css("background-image", "url('" + shape[i].inconBackShape + "')");
				$('#question').attr("src", "img/correct-green.png");
				$('#question').attr('class', "answer show");
				$('#' + id).attr('class', "icon answer hide");
				vibrar();
				sumariten();
				if (i < 9) {
					SigShape = setTimeout(siguienteShape, 2000);
				}
				else {
					mybtnclick();
				}
			}
			else {

				$('#question').attr("src", "img/wrong-red.png");
				$('#question').attr('class', "answer show");
				if (i < 9) {
					SigShape = setTimeout(siguienteShape, 2000);
				}
				else {
					mybtnclick();

				}
			}
		}

		function siguienteShape() {

			i++;
			$('#dropzone-rectangle').css("background-image", "url('" + shape[i].iconShape + "')");
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
		var shape = [
			{ name: "rectangle", iconShape: "img/rectangle-bg.png", inconBackShape: "img/rectangle.png" },
			{ name: "square", iconShape: "img/square-bg.png", inconBackShape: "img/square.png" },
			{ name: "triangle", iconShape: "img/triangle-bg.png", inconBackShape: "img/triangle.png" },
			{ name: "hexagon", iconShape: "img/hexagon-bg.png", inconBackShape: "img/hexagon.png" },
			{ name: "star", iconShape: "img/star-bg.png", inconBackShape: "img/star.png" },
			{ name: "circle", iconShape: "img/circle-bg.png", inconBackShape: "img/circle.png" },
			{ name: "diamond", iconShape: "img/diamond-bg.png", inconBackShape: "img/diamond.png" },
			{ name: "pentagon", iconShape: "img/pentagon-bg.png", inconBackShape: "img/pentagon.png" },
			{ name: "heart", iconShape: "img/heart-bg.png", inconBackShape: "img/heart.png" },
			{ name: "oval", iconShape: "img/oval-bg.png", inconBackShape: "img/oval.png" }
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
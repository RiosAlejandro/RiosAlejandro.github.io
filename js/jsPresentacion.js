(function() {
	"use strict";

	document.addEventListener('DOMContentLoaded', function(){

		//Titulo h1
		$('.titulo').lettering();

		// set up the base pattern--TRIANGLIFY(fondo de HEADER)
	    var pattern = Trianglify({
	    height: window.innerHeight,
	    width: window.innerWidth,
	    variance: "0.11", x_colors: 'Blues',

	    cell_size: 30 + Math.random() * 100})

		  // canvas
		  document.getElementById("headr").appendChild(pattern.canvas())


		  //Copiar enlace
		var clipboard  = new ClipboardJS('.portapapeles');

		clipboard.on('success', function(e){
			alert("Enlace copiado");
		});
		clipboard.on('error', function(e){
			//Algo no salio como debia
		});
	});//DOM Content Loaded
})();

var slideIndex = 1;
		showSlides(slideIndex);

		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}

		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}

		function showSlides(n) {
		  var i;
		  var slides = document.getElementsByClassName("mySlides");
		  var dots = document.getElementsByClassName("dot");
		  if (n > slides.length) {slideIndex = 1}
		    if (n < 1) {slideIndex = slides.length}
		    for (i = 0; i < slides.length; i++) {
		      slides[i].style.display = "none";
		    }
		    for (i = 0; i < dots.length; i++) {
		      dots[i].className = dots[i].className.replace(" active", "");
		    }
		  slides[slideIndex-1].style.display = "block";
		  dots[slideIndex-1].className += " active";
		}

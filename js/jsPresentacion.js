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

$( document ).ready( function() {

	$('.form-inline').submit(convertedTemperature);

	function convertedTemperature(event) {

		event.preventDefault();

		var tempC = $('#celsius').val();
		var tempF = tempC * 9/5 + 32;
		//console.log(tempF);

		tempC = parseInt(tempC);
		tempF = parseInt(tempF);
		//console.log(tempF);

		document.getElementById('')



		if (tempF <= 65) {


	}

});
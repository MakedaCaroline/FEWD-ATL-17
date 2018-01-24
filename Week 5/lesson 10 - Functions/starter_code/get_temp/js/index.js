$( document ).ready( function() {

	$('.form-inline').submit(convertedTemperature);

	function convertedTemperature(event) {

		event.preventDefault();

		var tempC = $('#celsius').val();
		var tempF = tempC * 1.8 + 32;
		//console.log(tempF);

		tempC = parseInt(tempC);
		tempF = parseInt(tempF);
		console.log(tempF);

		if (tempF <= 65) {
			document.getElementById("#celsius").style.backgroundColor = '#99C262';
		}

	}

});
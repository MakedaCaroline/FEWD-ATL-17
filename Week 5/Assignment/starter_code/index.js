/* Get User Input 
If User inputs "New York" or "New York City" or "NYC" make background imag nyc.jpg
If user inputs "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
If user inputs "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
if user inputs Austin" or "ATX" make the background of the page austin.jpg
If user inputs "Sydney" or "SYD" make the background of the page sydney.jpg  */

$(document).ready(function() {

	$('form').submit(function(){
		$('input:text').val();
	});

	$('.container').submit(yourCities);


	function yourCities(event) {

		event.preventDefault();

		var city=['New York','New York City','NYC','San Francisco','SF', 'Bay Area','Los Angeles', 'LA', 'LAX', 'Austin', 'ATX', 'Sydney', 'SYD'];

		if ( city == 'New York' || city == 'New York City' || city = 'NYC' ); {

			$('#city-type').attr('src',"images/nyc.jpg");

			// $('.container').css({backgroundImage:'url(images/nyc.jpg)'});

		}else if (city == 'San Francisco' || 'SF' || 'Bay Area') {

			$('#city-type').attr('src','images/sf.jpg');

			// $('.container').css({backgroundImage:'url(images/sf.jpg)'});

		}else if (city == 'Los Angeles' || 'LA' || 'LAX') {

			$('#city-type').attr('src','images/la.jpg');

			// $('.container').css({backgroundImage:'url(images/la.jpg)'});

		}else if (city == 'Austin' || 'ATX') {

			$('#city-type').attr('src', 'images/austin.jpg');

			 //$('.container').css({backgroundImage:'url(images/austin.jpg)'});

		}else if (city == 'Sydney' || city == 'SYD') {

			$('#city-type').attr('src','images/sydney/jpg');

			//$('.container').css({backgroundImage:'url(images/sydney.jpg)'});

		}
	}

	
});
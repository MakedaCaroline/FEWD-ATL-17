$(document).ready(function() {

	var yourCity =["NYC","SF","LA","ATX","SYD"];
	var user= $('#city-type').val();
	var userChoice = $('<option>').val();

	
	var arrayLength = yourCity.length;
for (var i = 0; i < arrayLength; i++) {

	$('#city-type').append($('<option>', {

		value: i, 
		text: yourCity

		$('select').click(function(event) {

			event.preventDefault();

		if(userChoice === 'New York City') {

			$('.nyc').css({backgroundImage:"url(../images/nyc.jpg)"});

		}else if(userChoice ==='San Francisco') {

			$('.sf').css({backgroundImage:"url(../images/sf.jpg)"});
			
		}else if (userChoice === 'Los Angeles') {

			$('.la').css({backgroundImage:"url(../images/la.jpg)"});

		}else if (userChoice === 'Austin') {

			$('.austin').css({backgroundImage:"url(../images/austin.jpg)"});

		}else if (userChoice === 'Sydney') {

			$('.sydney').css({backgroundImage:"url(../images/sydney.jpg)"});

		}


		});

	}));

};


	/* var userOptions = {

		val1: 'New York City',
		val2: 'San Francisco',
		val3: 'Los Angeles',
		val4: 'Austin',
		val5: 'Sydney'
	};

	var userSelect = $('#city-type');
	$.each(userOptions, function(val,text) {
		userOptions.append(
			$('<option></option>').val(val).html(text)
			);
	}); */



// console.log(yourCity);

});\
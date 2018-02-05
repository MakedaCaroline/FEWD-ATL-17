$(document).ready(function() {

	$('button').click(function(event) {

		event.preventDefault();

		var val1 = $('#valueone').val();
		//console.log(val1);
		var val2 = $('#valuetwo').val();
		//console.log(val2);
		var operator = $('select').val();
		//console.log(operator);
		var result = 0;

		val1 = parseInt(val1);
		val2 = parseInt(val2);

		if(operator === '/') {

			result = val1 / val2 

			//console.log(result);


		}else if (operator === '*') {

			result = val1 * val2
			//console.log(result);

		}else if (operator === '-') {

			result = val1 - val2 
			//console.log(result);


		}else if (operator === '+') {

			result = val1 + val2
			console.log(result);

		} 

		$('#answer').html(result);



	});

});
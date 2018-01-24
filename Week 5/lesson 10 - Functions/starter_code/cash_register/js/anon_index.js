var total = 0;

$('#entry').submit(function(event) {

	event.preventDefault();

	var entry;
	var currency;

	entry = $('#newEntry').val();
	entry = parseFloat(entry);

	currency = currencyFormat(entry);

	$('#entries').append('<tr><td></td><td>' + currency + "</td></tr>");

	total = total + entry;
	console.log(total);
	console.log(currencyFormat(total));

	$('#total').html(currencyFormat(total));

	$('#newEntry').val('');
});



function currencyFormat(number) {

	var convertedCurrency = parseFloat(number);
	convertedCurrency = convertedCurrency.toFixed(2);

	convertedCurrency = '$' + convertedCurrency;

	return convertedCurrency;
}
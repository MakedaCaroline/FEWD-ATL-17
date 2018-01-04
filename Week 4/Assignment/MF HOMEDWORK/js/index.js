$(document).ready(function() {

	$('.readmore').click(showText);
	$('.readless').click(hideText);
	$('.learnmore').click(learnMore);

	function showText(e) {
		e.preventDefault();
		$('#show-this-on-click').slideDown();
		$('.readmore').hide();
		$('.readless').show();
	


	function hideText(e) {
		e.preventDefault();
		$('.hide').slideUp();
		$('.readless').hide();
		$('.readmore').show();
	}

	function learnMore(e) {
		e.preventDefault();
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
	}

};


// $(document).ready(function() {


//	function showText(event) {
//		event.preventDefault();
//	}

//	});

//	$('.readmore').click('showText');

//	$('.readmore').click(function() {
//		$('#show-this-on-click').slideDown();

//	});

//	$('.readmore').click(function() {
//		$('.readless hide').show();

//	});

//	$('.readmore').click(function() {
//		$('.readmore').hide();

//	});

//	$('.readless hide').click(function() {
//		$('.hide').slideUp();
//	});

//	$('.readless hide').click(function() {
//		$('.readmore').show();
//	});

//}; 
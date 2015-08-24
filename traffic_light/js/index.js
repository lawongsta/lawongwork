//Implement the red light using jQuery. Don't forget to add the script tags.

$(document).ready(function(){

	$('h1#stopButton').click(function(){

		$('div.bulb').css('background-color', 'black');
		$('div#stopLight').css('background-color', 'red');

	});

	$('h1#slowButton').click(function(){

		$('div.bulb').css('background-color','black');
		$('div#slowLight').css('background-color','yellow');

	});

		$('h1#goButton').click(function(){

		$('div.bulb').css('background-color','black');
		$('div#goLight').css('background-color','green');

	});


});
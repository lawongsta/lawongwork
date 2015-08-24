$(document).ready(function(){

	$('.expandText').click(function(e){

		$(this).parents('.post').find('p').slideDown('slow');
		$(this).fadeOut('slow');

		e.preventDefault();
		return false;

	});

});

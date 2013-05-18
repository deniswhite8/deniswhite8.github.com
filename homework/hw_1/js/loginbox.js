$(document).ready(function() {
	
	$('#login').on('click', function() {
		$('#overlay').css("visibility", "visible");
		$('#loginBox').css("visibility", "visible").css('opacity', 0).fadeTo(1000, 1);
		$('#main').addClass('blur');
		$('#header').addClass('blur');
		$('#footer').addClass('blur');
	});

	$('#cancel').on('click', function() {
		$('#loginBox').css("visibility", "hidden");
		$('#overlay').css("visibility", "hidden");
		$('#main').removeClass('blur');
		$('#header').removeClass('blur');
		$('#footer').removeClass('blur');
	});

});
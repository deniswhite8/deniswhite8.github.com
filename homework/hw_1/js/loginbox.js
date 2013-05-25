$(document).ready(function() {
	
	$('#login').on('click', function() {
		$('#main').addClass('blur');
		$('#header').addClass('blur');
		$('#footer').addClass('blur');
		$('#overlay').show();
		$('#loginBox').show();
		$('#loginBox').css({'opacity': 0, 'margin-top':-215}).animate({'opacity':1, 'margin-top':-115}, 1000);

	});

	$('#cancel').on('click', function() {
		$('#loginBox').animate({'opacity':0, 'margin-top':-15}, 1000, function() {
			$('#overlay').hide();
			$('#loginBox').hide();
			$('#main').removeClass('blur');
			$('#header').removeClass('blur');
			$('#footer').removeClass('blur');
		});
	});
});
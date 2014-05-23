$(document).ready(function() {

$('.choice').on('click', function() {
	$('.choice').removeClass('selectedAnswer');
	$(this).addClass('selectedAnswer');
});

});
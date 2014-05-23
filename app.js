$(document).ready(function() {

// Change color of selected option //
$('.choice').on('click', function() {
	console.log('changecolor');
	$('.choice').removeClass('selectedAnswer');
	$(this).addClass('selectedAnswer');
});

// Clear Questions //
function q1clear() {
	$('.quiz-questions').hide();
	$('.picture').hide();
	$('#q1').hide();
}
 
// Check Answer //
function checkAnswer(question,answer) {
var rightAnswer = 0;
if(question == 'q1' && answer =='5'){
	$('.correct').show();
	rightAnswer++;
	}
else if(question == 'q1' && answer !== '5') {
	$('.incorrect').show();
	}
}

// Continue //
$('.ok').on('click', function() {
	$('.correct').hide();
	$('.incorrect').hide();
	});
});
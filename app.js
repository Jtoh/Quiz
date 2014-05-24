var answers = {
	q1:5,
	q2: "Michael Jordan",
	q3: 'Thunders',
	q4: 'Damian Lillard'
};

$(document).ready(function() {

// Change color of selected option //
$('.choice').on('click', function() {
	var answer = parseInt($(this).find('.text').text(), 10);
	var question = $(this).parent().prop('id');
	
	$('.choice').removeClass('selectedAnswer');
	$(this).addClass('selectedAnswer');
	
	checkAnswer(question, answer);
});

// Restart Quiz
	$('.restart').on('click', function(){
		var current = parseInt($('.quiz-questions').data('current'), 10);
		advanceQuestion(current, 1);
	});

// Continue //
	$('.ok').on('click', function() {
		var current = parseInt($('.quiz-questions').data('current'), 10);
		var next = current + 1;
		
		$('.correct').hide();
		$('.incorrect').hide();
		
		advanceQuestion(current, next);
		$('.quiz-questions').data('current', next);
	});
});

// Clear Questions //
function advanceQuestion(current, next) {
		$('.question' + current).hide();
		$('.answers' + current).hide();
		$('.image' + current).hide();
		
		$('.question' + next).show();
		$('.answers' + next).show();
		$('.image' + next).show();
}
 
// Check Answer //
function checkAnswer(question,answer) {
	var rightAnswer = 0;
	if(answers[question] === answer){
		$('.answer-status').addClass('correct').removeClass('incorrect').show();
		rightAnswer++;
	}
	else{
		$('.incorrect').show();
	}
}
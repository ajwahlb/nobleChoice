

if ($(window).width() < 768) {
	$('.new-break').replaceWith('<br>');
	$('.education h4.card-header, .conditions h4.card-header, .mobile-techniques h4.card-header').click(function(){
		$(this).next('.card-body').toggle();
	});
}

$('.techniques-body').scrollspy({ target: '#techniques' })
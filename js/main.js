$(document).ready(function () {
	$('.reviews__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		dots: true
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		}
		else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function () {
		$('body,html').animate({ scrollTop: 0 }, 1500);
	});







});

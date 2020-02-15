// slick slider

$(function () {
	$('.top__slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		aytoplaySpedd: 2000,
		fade: true,
	});
	$('.slick-prev').click(function () {
		$('.top__slider').slick('slickPrev');
	})

	$('.slick-next').click(function () {
		$('.top__slider').slick('slickNext');
	});

	$('.single-item').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		adaptiveHeight: true,
		fade: true,
	});
});

// function for burger menu

function openNav() {
	document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
	document.getElementById("myNav").style.height = "0%";
}
$(function(){
	$('.top__slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		aytoplaySpedd: 3000,
		fade: true,
	});
	$('.slick-prev').click(function(){
		$('.top__slider').slick('slickPrev');
	})
	
	$('.slick-next').click(function(){
		$('.top__slider').slick('slickNext');
	});

	$('.single-item').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
	});

	var show = true;
	var countbox = ".info";
	$(window).on("scroll load resize", function () {
			if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
			var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
			var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
			var w_height = $(window).height(); // Высота окна браузера
			var d_height = $(document).height(); // Высота всего документа
			var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
			if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
					$('.info-block-number').css('opacity', '1');
					$('.info-block-number').spincrement({
							thousandSeparator: "",
							duration: 1200
					});

					show = false;
			}
	});
});


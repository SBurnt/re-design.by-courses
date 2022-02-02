import Swiper from '../../../node_modules/swiper/swiper-bundle';

const sliderList = document.querySelectorAll('.js-slider-init');
if (sliderList) {
	sliderList.forEach(el => {
		const swiper = new Swiper(el, {
			loop: true,
			autoHeight: true,
			// autoplay: {
			// 	delay: 5000,
			// 	disableOnInteraction: false,
			// },
			navigation: {
				nextEl: '.slider__arrows-next',
				prevEl: '.slider__arrows-prev',
			},
			breakpoints: {
				// when window width is >= 768px
				768: {
					autoHeight: false,
				},
			},
		});
	});
}

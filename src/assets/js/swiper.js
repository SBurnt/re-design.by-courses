/* eslint-disable no-unused-vars */
import Swiper from '../../../node_modules/swiper/swiper-bundle';

const sliderSkills = document.querySelector('.js-slider-skills-init');
const sliderTicker = document.querySelector('.js-slider-ticker-init');

if (sliderSkills) {
	const swiper = new Swiper(sliderSkills, {
		loop: true,
		autoHeight: true,
		speed: 0,
		navigation: {
			nextEl: '.slider__arrows-next',
			prevEl: '.slider__arrows-prev',
		},
		pagination: {
			el: '.slider__pagination',
			clickable: true,
		},
		// breakpoints: {
		// 	// when window width is >= 768px
		// 	768: {
		// 		autoHeight: false,
		// 	},
		// },
	});
}

if (sliderTicker) {
	const swiper = new Swiper(sliderTicker, {
		loop: true,
		slidesPerView: 'auto',
		speed: 1000,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
	});
}

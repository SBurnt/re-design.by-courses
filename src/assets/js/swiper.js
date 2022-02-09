/* eslint-disable no-unused-vars */
import Swiper from '../../../node_modules/swiper/swiper-bundle';

const sliderSkills = document.querySelector('.js-slider-skills-init');
const sliderTicker = document.querySelector('.js-slider-ticker-init');
const sliderTeachers = document.querySelector('.js-slider-teachers-init');

if (sliderSkills) {
	const swiper = new Swiper(sliderSkills, {
		allowTouchMove: false,
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

if (sliderTeachers) {
	const mql = window.matchMedia('(min-width: 1200px)');

	if (mql.matches) {
		const galleryThumbs = new Swiper('.js-slider-teachers-thumbs-init', {
			allowTouchMove: false,
			spaceBetween: 0,
			slidesPerView: 'auto',
		});

		const swiper2 = new Swiper('.js-slider-teachers-init', {
			allowTouchMove: false,
			spaceBetween: 0,
			slidesPerView: 1,
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
			speed: 200,
			autoplay: {
				delay: 15000,
				disableOnInteraction: false,
			},
			keyboard: {
				enabled: true,
				onlyInViewport: false,
			},
			thumbs: {
				swiper: galleryThumbs,
			},
		});
	}
}

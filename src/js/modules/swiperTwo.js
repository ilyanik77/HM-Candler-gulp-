import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperTwo = new Swiper('.sertificates__slider', {
	loop: true,
	slidesPerView: 2,
	spaceBetween: 50,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
})

export default swiperTwo = swiperTwo;

import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
export function initSwiper() {
	const templateSlider = document.querySelector('.template__swiper')
	if (templateSlider) {
		const settings = {
			slidesPerView: 'auto',
			spaceBetween: 20,
			breakpoints: {
				700: {
					spaceBetween: 60
				}
			}
		}

		const sliderTemplate = new Swiper('.template__swiper', settings)
	}

	const ourServicesSlider = document.querySelector('.our-services__swiper')

	if (ourServicesSlider) {
		const settings = {
			enabled: true,
			slidesPerView: 'auto',

			breakpoints: {
				1024: {
					enabled: false,
					slidesPerView: 'auto'
				}
			}
		}
		const sliderOurServices = new Swiper('.our-services__swiper', settings)
	}

	const enterpriseSlider = document.querySelector('.enterprise__slider')

	if (enterpriseSlider) {
		const settings = {
			modules: [Navigation],
			navigation: {
				prevEl: '.enterprise__slider-btn-prev',
				nextEl: '.enterprise__slider-btn-next'
			},
			slidesPerView: 3,
			spaceBetween: 22,
			centeredSlides: true,
			loop: true,
			speed: 500
		}

		const sliderEnterprice = new Swiper('.enterprise__slider', settings)
	}
}

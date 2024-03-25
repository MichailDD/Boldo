import Swiper from 'swiper'

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
			slidesPerView: 2.4,
			breakpoints: {
				700: {
					spaceBetween: 100,
					enabled: false,
					slidesPerView: 3
				}
			}
		}
		const sliderOurServices = new Swiper('.our-services__swiper', settings)
	}
}

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
}

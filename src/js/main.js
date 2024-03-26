import { openBurgerMenu } from './header'
import { initSwiper } from './swiper'
import { setActiveElement } from './customers'
document.addEventListener('DOMContentLoaded', async () => {
	openBurgerMenu()
	initSwiper()
	setActiveElement()
})

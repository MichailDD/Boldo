import { openBurgerMenu } from './header'
import { initSwiper } from './swiper'
import { setActiveElement } from './customers'
import { chart } from './chart'
document.addEventListener('DOMContentLoaded', async () => {
	openBurgerMenu()
	initSwiper()
	setActiveElement()
	chart()

	
	
})



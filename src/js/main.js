import { openBurgerMenu } from './header'
import { initSwiper } from './swiper'
import { setActiveElement } from './customers'
import { chart } from './chart'
import { dropdown } from './dropdown'

document.addEventListener('DOMContentLoaded', async () => {
	openBurgerMenu()
	initSwiper()
	setActiveElement()
	chart()
	dropdown()
})

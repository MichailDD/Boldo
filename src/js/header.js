export function openBurgerMenu() {
	const burger = document.querySelector('.header__burger')
	const headerMenu = document.querySelector('.header__menu')
	burger.addEventListener('click', function () {
		burger.classList.toggle('active')
		headerMenu.classList.toggle('open')
	})
}

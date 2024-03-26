const itemElement = document.querySelectorAll('.customers__list-item')

export function setActiveElement() {
	itemElement.forEach((item) => {
		item.addEventListener('click', function (e) {
			item.classList.toggle('item-element-active')
		})
	})
}

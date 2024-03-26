const itemDropdown = document.querySelectorAll('.dropdown__accordion-item')
export function dropdown() {
	itemDropdown.forEach((item) => {
		item.addEventListener('click', () => {
			item.classList.toggle('active-dropdown')
		})
	})
}

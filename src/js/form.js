const form = document.getElementById('form')
const input = document.querySelector('.form__input-email')

function isValidEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function sendEmail() {
	const btn = document.querySelector('.form__btn')
	if (isValidEmail(input.value)) {
		btn.classList.add('active-btn')
		btn.disabled = false
	} else {
		btn.classList.remove('active-btn')
		btn.disabled = true
	}
}

input.addEventListener('input', sendEmail)

form.addEventListener('submit', function (event) {
	event.preventDefault()
	alert('Form submitted!')
})

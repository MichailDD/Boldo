export function addCards() {
	const loadMoreBtn = document.getElementById('loadMoreBtn')
	const cardContainer = document.getElementById('cardContainer')
	const overlay = document.getElementById('overlay')
	const body = document.querySelector('body')
	loadMoreBtn.addEventListener('click', function () {
		overlay.style.display = 'block'
		body.classList.add('lock')
		simulateServerRequest().then(function (newCards) {
			newCards.forEach(function (card) {
				cardContainer.appendChild(card)
			})
			overlay.style.display = 'none'
			body.classList.remove('lock')
		})
	})

	function simulateServerRequest() {
		return new Promise(function (resolve) {
			setTimeout(function () {
				const newCard1 = createCard(
					'Pitch termsheet backing validation focus release.'
				)
				const newCard2 = createCard(
					'Pitch termsheet backing validation focus release.'
				)
				const newCard3 = createCard(
					'Pitch termsheet backing validation focus release.'
				)

				resolve([newCard1, newCard2, newCard3])
			}, 2500)
		})
	}

	function createCard(title) {
		const card = document.createElement('div')
		card.classList.add('proposition__card')
		card.innerHTML = `
            <div class="proposition__card-image">
                <img src="/Boldo/assets/image-1-zdmVgjNx.png" alt="image card">
            </div>
            <div class="proposition__card-descr">
                <p class="proposition__card-category">
                   Category
                </p>
                <p class="proposition__card-date">
                   November 22, 2021
                </p>
            </div>
            <p class="proposition__card-title">${title}</p>
            <div class="proposition__card-person">
                <img src="/src/assets/images/proposition/avatar-1.png" alt="Chandler Bing">
                <p>Chandler Bing</p>
            </div>
        `
		return card
	}
}

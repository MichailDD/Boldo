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
                <img src="data:image/png;base64,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" alt="Chandler Bing">
                <p>Chandler Bing</p>
            </div>
        `
		return card
	}
}

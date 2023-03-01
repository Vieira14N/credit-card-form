const nameInput = document.querySelector('.name')
const nameSpan = document.querySelector('.nameSpan')

const cardNumberInput = document.querySelector('.cardNumber')
const cardNumberP = document.querySelector('.cardNumberP')

nameInput.addEventListener('keyup', () => {
    nameSpan.innerHTML = nameInput.value;
})

cardNumberInput.addEventListener('keyup', () => {
    cardNumberP.innerHTML = cardNumberInput.value;
})
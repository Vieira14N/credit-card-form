// name
const nameInput = document.querySelector('.name')
const nameSpan = document.querySelector('.nameSpan')

nameInput.addEventListener('keyup', () => {
    nameSpan.innerHTML = nameInput.value;
})

//card number
const cardNumberInput = document.querySelector('.cardNumber')
const cardNumberP = document.querySelector('.cardNumberP')

cardNumberInput.addEventListener('keyup', () => {
    let inputLength = cardNumberInput.value.length;
    
    if(inputLength === 4 || inputLength === 9 || inputLength === 14){
        cardNumberInput.value += ' ';
    }

    cardNumberP.innerHTML = cardNumberInput.value;
})

//month 'n year expire date
const monthInput = document.getElementById('month')
const monthSpan = document.querySelector('.monthSpan')

monthInput.addEventListener('keyup', () => {
    monthSpan.innerHTML = monthInput.value;
})

const yearInput = document.getElementById('year')
const yearSpan = document.querySelector('.yearSpan')

yearInput.addEventListener('keyup', () => {
    yearSpan.innerHTML = yearInput.value;
})

//cvc

const cvcInput = document.getElementById('cvc')
const cvcP = document.querySelector('.cvcP')

cvcInput.addEventListener('keyup', () => {
    cvcP.innerHTML = cvcInput.value;
})

//Form

const form = document.querySelector('.form')
const succeedForm = document.querySelector('.succeed-form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('hide')
    succeedForm.classList.remove('hide')
})

succeedForm.addEventListener('submit', (e) => {
    e.preventDefault();
    succeedForm.classList.add('hide')
    form.classList.remove('hide')
})
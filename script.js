// form verify functions

function isEmpty(input){
    input.addEventListener('focus', () => {
        if(input.value === ''){
            empty.classList.add('show')
        }
    })

    input.addEventListener('keyup', () => {
        if(input.value === ''){
            empty.classList.add('show')
        } else {
            empty.classList.remove('show')
        }
    })
}

// name
const nameInput = document.querySelector('.name')
const nameSpan = document.querySelector('.nameSpan')
const empty = document.querySelector('.empty')

nameInput.addEventListener('keyup', () => {
    nameSpan.innerHTML = nameInput.value;
})

isEmpty(nameInput)

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
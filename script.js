// form verify functions
const empty = document.querySelectorAll('.empty')
const error = document.querySelectorAll('.error')

function isEmpty(input,index){
    input.addEventListener('focus', () => {
        if(input.value === ''){
            empty[index].classList.add('show')
        }
    })

    input.addEventListener('keyup', () => {
        if(input.value === ''){
            empty[index].classList.add('show')
        } else {
            empty[index].classList.remove('show')
        }
    })
}


function isNumber(input,index){
    input.addEventListener('keyup', () => {
        const num = Number(input.value.replaceAll(' ',''));
        if(!num){
            error[index].classList.add('show')
        } else {
            error[index].classList.remove('show')
        }
    })
}


// name
const nameInput = document.querySelector('.name')
const nameSpan = document.querySelector('.nameSpan')

nameInput.addEventListener('keyup', () => {
    nameSpan.innerHTML = nameInput.value;
})

isEmpty(nameInput,0)

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

isEmpty(cardNumberInput,1)
isNumber(cardNumberInput,0)

//month 'n year expire date
const monthInput = document.getElementById('month')
const monthSpan = document.querySelector('.monthSpan')

monthInput.addEventListener('keyup', () => {
    monthSpan.innerHTML = monthInput.value;
})

isEmpty(monthInput,2)
isNumber(monthInput,1)

const yearInput = document.getElementById('year')
const yearSpan = document.querySelector('.yearSpan')

yearInput.addEventListener('keyup', () => {
    yearSpan.innerHTML = yearInput.value;
})

isEmpty(yearInput,3)
isNumber(yearInput,2)

//cvc

const cvcInput = document.getElementById('cvc')
const cvcP = document.querySelector('.cvcP')

cvcInput.addEventListener('keyup', () => {
    cvcP.innerHTML = cvcInput.value;
})

isEmpty(cvcInput,4)
isNumber(cvcInput,3)

//Form

const form = document.querySelector('.form')
const succeedForm = document.querySelector('.succeed-form')

function validateForm(i1,i2,i3,i4,i5){
    if(i1.value && i2.value && i3.value && i4.value && i5.value){
        return true
    } else {
        return false
    }
}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(validateForm(nameInput,cardNumberInput,monthInput,yearInput,cvcInput)){
        form.classList.add('hide')
        succeedForm.classList.remove('hide')
    }
})

succeedForm.addEventListener('submit', (e) => {
    e.preventDefault();
    succeedForm.classList.add('hide')
    form.classList.remove('hide')
})
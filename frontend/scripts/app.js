let nameInput = document.querySelector('#name-input')
let nameMsg = document.querySelector('#name-msg')
let familyNameInput = document.querySelector('#fname-input')
let familyNameMsg = document.querySelector('#fname-msg')
let userNameInput = document.querySelector('#uname-input')
let userNameMsg = document.querySelector('#uname-msg')
let passInput = document.querySelector('#pass-input')
let passMsg = document.querySelector('#pass-msg')
let registerBtn = document.querySelector('button')
let failedModal = document.querySelector('.failed-register-msg')
let successfulModal = document.querySelector('.successful-register-msg')
let inputs = document.querySelectorAll('input')
let spans = document.querySelectorAll('span')

function clearMsg() {
    inputs.forEach(input => {
        input.addEventListener('focus' , () => {
            spans.forEach(span => {
                span.style.opacity = '0'
            })
        })
    })
}
clearMsg()

function sendData() {
    if (!nameInput.value || nameInput.value.length < 3) {
        nameMsg.style.opacity = '1'
    } else if (!familyNameInput.value || familyNameInput.value.length < 3) {
        familyNameMsg.style.opacity = '1'
    } else if (!userNameInput.value || userNameInput.value.length < 3) {
        userNameMsg.style.opacity = '1'
    } else if (!passInput.value || passInput.value.length < 5) {
        passMsg.style.opacity = '1'
    } else {
        let newUserObj = {
            name : nameInput.value,
            familyName : familyNameInput.value,
            userName : userNameInput.value,
            password : passInput.value,
        }
        fetch('http://localhost:3000/api/users/add-new-user' , {
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            } ,
            body : JSON.stringify(newUserObj)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                successfulModal.style.opacity = '1'
                setTimeout(() => {
                    successfulModal.style.opacity = '0'
                } , 2000)
            } else {
                failedModal.style.opacity = '1'
                setTimeout(() => {
                    failedModal.style.opacity = '0'
                } , 2000)
            }
        })
    }
}

function clearInputs() {
    nameInput.value = ''
    familyNameInput.value = ''
    userNameInput.value = ''
    passInput.value = ''
}

registerBtn.addEventListener('click', sendData)
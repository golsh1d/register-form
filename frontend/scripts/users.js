let deleteBtn = document.querySelector('.del-btn')
let updateBtn = document.querySelector('.update-btn')
let deleteModal = document.querySelector('.del-modal')
let updateModal = document.querySelector('.update-modal')
let deleteModalClose = document.querySelector('.del-modal-close')
let updateModalClose = document.querySelector('.update-modal-close')
let deleteModalYesBtn = document.querySelector('.yes-btn')
let deleteModalNoBtn = document.querySelector('.no-btn')
let updateModalBtn = document.querySelector('.update-modal-btn')
let nameSpan = document.querySelector('.name-span')
let familyNameSpan = document.querySelector('.familyname-span')
let nameInput = document.querySelector('.update-modal-name-input')
let familyNameInput = document.querySelector('.update-modal-familyname-input')
let userNameInput = document.querySelector('.update-modal-username-input')
let passInput = document.querySelector('.update-modal-pass-input')

function showDeleteModal() {
    deleteModal.style.display = 'block'
    updateModal.style.display = 'none'
}

function closeDeleteModal() {
    deleteModal.style.display = 'none'
}

function showUpdateModal() {
    updateModal.style.display = 'block'
    deleteModal.style.display = 'none'
}

function closeUpdateModal() {
    updateModal.style.display = 'none'
}

//events
deleteBtn.addEventListener('click' , showDeleteModal)
deleteModalClose.addEventListener('click' , closeDeleteModal)
deleteModalNoBtn.addEventListener('click' , closeDeleteModal)
updateBtn.addEventListener('click' , showUpdateModal)
updateModalClose.addEventListener('click' , closeUpdateModal)
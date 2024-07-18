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
let usersContainer = document.querySelector('section')

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

function showUsersList() {
    fetch('http://localhost:3000/api/users/get-all-users')
    .then(res => res.json())
    .then(data => {
        if (data) {
            data.forEach(obj => {
            usersContainer.insertAdjacentHTML(`beforeend`,
                `<div class="main-content">
                    <div class="left-section">
                        <div class="user-icon">
                            <span class="material-symbols-outlined">
                                person
                            </span>
                        </div>
                        <div class="user-info">
                            <p>Name : <span class="name-span">${obj.name}</span></p>
                            <p>Familyname : <span class="familyname-span">${obj.familyName}</span></p>
                        </div>
                        </div>
                        <div class="right-section">
                            <div>
                                <button class="del-btn">Delete</button>
                            </div>
                            <div>
                                <button class="update-btn">Update</button>
                            </div>
                        </div>
                    </div>`
                )  
            })
        }
    })
}

//events
window.addEventListener('load' , showUsersList)
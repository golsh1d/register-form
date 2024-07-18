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
let overlayElem = document.querySelector('.overlay')

function showDeleteModal(id) {
    deleteModal.style.display = 'block'
    updateModal.style.display = 'none'
    overlayElem.style.display = 'block'
    deleteModalYesBtn.onclick = function() {
        userDeleteInfo = {
            id : id ,
        }
        fetch('http://localhost:3000/api/users/delete-user' , {
            method : 'DELETE',
            headers : {
                'Content-type' : 'application/json'
            } , 
            body : JSON.stringify(userDeleteInfo)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                closeDeleteModal()
                showUsersList()
                overlayElem.style.display = 'none'
            }
        })
    }
}

function closeDeleteModal() {
    deleteModal.style.display = 'none'
    overlayElem.style.display = 'none' 
}

function showUpdateModal(id) {
    updateModal.style.display = 'block'
    deleteModal.style.display = 'none'
    overlayElem.style.display = 'block'
    userUpdateInfo = {
        id : id
    }
    fetch('http://localhost:3000/api/users/get-selected-user-data' , {
        method : 'POST',
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify(userUpdateInfo)
    })
    .then(res => res.json())
    .then(data => {
        if (data) {
            nameInput.value = data[0].name
            familyNameInput.value = data[0].familyName
            userNameInput.value = data[0].userName
            passInput.value = data[0].password
        }
    })
    updateModalBtn.onclick = function () {
        let selectedUserNewInfo = {
            id : id,
            name : nameInput.value,
            familyName : familyNameInput.value,
            userName : userNameInput.value,
            password : passInput.value,
        }
        fetch('http://localhost:3000/api/users/update-user' , {
            method : 'PUT',
            headers : {
                'Content-type' : 'application/json'
            } ,
            body : JSON.stringify(selectedUserNewInfo)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                showUsersList()
                closeUpdateModal()
                overlayElem.style.display = 'none'
            }
        })
    }
}

function closeUpdateModal() {
    updateModal.style.display = 'none'
    overlayElem.style.display = 'none' 
}

function showUsersList() {
    usersContainer.innerHTML = ''
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
                            <div onclick="showDeleteModal(${obj.id})">
                                <button class="del-btn">Delete</button>
                            </div>
                            <div onclick="showUpdateModal(${obj.id})">
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
deleteModalClose.addEventListener('click' , closeDeleteModal)
deleteModalNoBtn.addEventListener('click' , closeDeleteModal)
updateModalClose.addEventListener('click' , closeUpdateModal)
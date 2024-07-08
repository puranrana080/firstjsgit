document.getElementById('form').addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault()

    const allPasswords = {
        Title: event.target.title.value,
        Password: event.target.password.value,
    }
    axios.post("https://crudcrud.com/api/982bbc0e26d047f48dbcc5e8cc916337/PasswordKeeper", allPasswords)
        .then((response) => {
            console.log("Added password successfully")
            displayUserOnScreen(response.data)
            document.getElementById('title').value = ""
            document.getElementById('password').value = ""
            countPasswords()


        })
        .catch((error) => {
            console.log(error)
        })


}
window.addEventListener("DOMContentLoaded", () => {

    axios.get('https://crudcrud.com/api/982bbc0e26d047f48dbcc5e8cc916337/PasswordKeeper')
        .then((response) => {
            countPasswords()
            for (var i = 0; i < response.data.length; i++) {
                displayUserOnScreen(response.data[i])

            }
        })
        .catch((error) => {
            console.log(error)
        })
})

function countPasswords() {
    axios.get('https://crudcrud.com/api/982bbc0e26d047f48dbcc5e8cc916337/PasswordKeeper')
        .then((response) => {
            const count = document.getElementById('count')
            count.innerHTML = (`Total Passwords: ${response.data.length}`)
        })

}


function displayUserOnScreen(allPasswords) {

    const listItem = document.createElement('li')
    listItem.appendChild(document.createTextNode(`${allPasswords.Title}--${allPasswords.Password}  `))

    const deleteBtn = document.createElement('button')
    deleteBtn.appendChild(document.createTextNode('Delete'))
    listItem.appendChild(deleteBtn)

    const editBtn = document.createElement('button')
    editBtn.appendChild(document.createTextNode('Edit'))
    listItem.appendChild(editBtn)

    const allList = document.querySelector('ul')
    allList.append(listItem)

    deleteBtn.addEventListener('click', () => {
        axios.delete(`https://crudcrud.com/api/982bbc0e26d047f48dbcc5e8cc916337/PasswordKeeper/${allPasswords._id}`)
            .then((response) => {
                console.log("Deleted Successfully")
                allList.removeChild(listItem)
                countPasswords()
            })
            .catch((error) => {
                console.log(error)
            })


    })

    editBtn.addEventListener('click', () => {
        document.getElementById('title').value = allPasswords.Title
        document.getElementById('password').value = allPasswords.Password

        axios.delete(`https://crudcrud.com/api/982bbc0e26d047f48dbcc5e8cc916337/PasswordKeeper/${allPasswords._id}`)
            .then((response) => {
                allList.removeChild(listItem)
                console.log("editing")
                countPasswords()
            })
            .catch((error) => {
                console.log(error)
            })



    })

}

//adding filter

const filter = document.getElementById('search')
filter.addEventListener('keyup', function (event) {
    const currentText = event.target.value.toLowerCase()
    const passwordItems = document.querySelectorAll('#passwordList li');
    for (let i = 0; i < passwordItems.length; i++) {
        const currentListTitleText = passwordItems[i].firstChild.textContent.toLowerCase()

        if (currentListTitleText.indexOf(currentText) === -1) {
            passwordItems[i].style.display = 'none';
        }
        else {
            passwordItems[i].style.display = 'list-item'
        }
    }
})




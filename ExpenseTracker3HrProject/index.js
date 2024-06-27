document.querySelector('button').addEventListener('click', function (event) {
    event.preventDefault()
    const expenseAmount = document.querySelector('#amount').value
    const description = document.querySelector('#desc').value
    const category = document.querySelector('#category').value
    let expense = {
        Amount: expenseAmount,
        Description: description,
        Category: category
    }

    localStorage.setItem(category, JSON.stringify(expense))

    document.querySelector('#amount').value = ''
    document.querySelector('#desc').value = ''
    document.querySelector('#category').value = ''



    const ulList = document.querySelector('ul')
    const newList = document.createElement('li')
    newList.id = description;
    newList.innerHTML = `${expenseAmount} - ${description} - ${category} `
    ulList.appendChild(newList)


    const delBtn = document.createElement('input')
    delBtn.type = 'button'
    delBtn.value = 'Delete Expense'
    
    delBtn.onclick = function () {
        deleteUser(description)
    }
    newList.append(delBtn)



    const editBtn = document.createElement('input')
    editBtn.type = 'button'
    editBtn.value = 'Edit Expense'
    editBtn.onclick = function () {
        document.querySelector('#amount').value = expenseAmount
        document.querySelector('#desc').value = description
        document.querySelector('#category').value = category

        deleteUser(description)
    }
    newList.append(editBtn)

})

function deleteUser(description) {
    localStorage.removeItem(description)
    document.getElementById(description).remove();

}
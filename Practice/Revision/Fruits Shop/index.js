const form = document.querySelector('form')

//Adding desc input box to the form
const descBox = document.createElement('input')
descBox.type = 'text'
descBox.id = 'desc-to-add'
const addBtn = document.querySelector('button')
form.insertBefore(descBox, addBtn)

const fruits = document.querySelectorAll('.fruit')



//Adding desc to preList
for (let i = 0; i < fruits.length; i++) {
    const beforeBtn = fruits[i].querySelector('.delete-btn')
    const para = document.createElement('p')
    para.textContent = 'king of fruits'
    para.style.fontStyle='italic'
    fruits[i].insertBefore(para, beforeBtn)
}

//Adding edit button to preList
for (let i = 0; i < fruits.length; i++) {
    const edit = document.createElement('button')
    edit.type = 'button'
    edit.textContent = 'Edit'
    edit.className = 'edit-btn'
    fruits[i].appendChild(edit)
}



form.addEventListener('submit', function (event) {
    event.preventDefault()

    const ulist = document.querySelector('ul')
    const textToAdd = document.querySelector('#fruit-to-add')
    const liList = document.createElement('li')
    liList.className = 'fruit'
    liList.innerHTML = textToAdd.value
    ulist.appendChild(liList)


    const descToAdd = document.querySelector('#desc-to-add')
    const newPara = document.createElement('p')
    newPara.textContent = descToAdd.value
    newPara.style.fontStyle = 'italic'
    liList.appendChild(newPara)

    //Adding delete btn
    const delBtn = document.createElement('button')
    delBtn.type = 'button'
    delBtn.className = 'delete-btn'
    delBtn.appendChild(document.createTextNode('X'))
    
    liList.appendChild(delBtn)

    //Adding Edit Btn
    const editBtn = document.createElement('button')
    editBtn.appendChild(document.createTextNode('Edit'))
    editBtn.className = 'edit-btn'
    editBtn.type = 'button'
    liList.appendChild(editBtn)


})

//deleting 

const fruit =document.querySelector('.fruits')
fruit.addEventListener('click',function(event){
    if (event.target.classList.contains('delete-btn')){
        const fruitToDelete=event.target.parentElement
        fruit.removeChild(fruitToDelete)
    }

})


// Adding filter

const filter=document.getElementById('filter')
filter.addEventListener('keyup',function(event){
const textToFilter=event.target.value.toLowerCase()
const fruitItems=document.getElementsByClassName('fruit')
for(let i=0;i<fruitItems.length;i++){
    const currentFruitText=fruitItems[i].firstChild.textContent.toLowerCase()
    const currentFruitDescText=fruitItems[i].querySelector('p').textContent.toLowerCase()
    if (currentFruitText.indexOf(textToFilter)===-1 && currentFruitDescText.indexOf(textToFilter)===-1){
        fruitItems[i].style.display='none'
    }
    else{
        fruitItems[i].style.display='list-item'
    }
}

})





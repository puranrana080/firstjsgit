const fruits=document.querySelectorAll('.fruit')
for (let i=0;i<fruits.length;i++){
const eBtn=document.createElement('button')
const eBtnText=document.createTextNode('Edit')
eBtn.appendChild(eBtnText)
eBtn.className='edit-btn'
fruits[i].appendChild(eBtn)
}



const form=document.querySelector('form')
const fruit=document.querySelector('.fruits')



form.addEventListener('submit',function(event){
    event.preventDefault();
    const textToAdd=document.getElementById('fruit-to-add')

    const newLi=document.createElement('li')
    const newLiText=document.createTextNode(textToAdd.value)
newLi.appendChild(newLiText)
newLi.className='fruit'
fruit.appendChild(newLi)

const delBtn=document.createElement('button')
const delBtnText=document.createTextNode('x')
delBtn.appendChild(delBtnText)
delBtn.className='delete-btn'
newLi.appendChild(delBtn)


const editBtn=document.createElement('button')
const editBtnText=document.createTextNode('Edit')
editBtn.appendChild(editBtnText)
editBtn.className=('edit-btn')
newLi.appendChild(editBtn)




})


//Deleting 

fruit.addEventListener('click',function(event){
if (event.target.classList.contains('delete-btn')){
    const fruitToDelete=event.target.parentElement
    fruit.removeChild(fruitToDelete)
}

})





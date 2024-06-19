// Add input element inside form, before button, to take fruit description
const form=document.querySelector('form')
const descBox=document.createElement('input')
descBox.type='text'
descBox.id='desc-to-add'
const firstBtn=document.querySelector('button')
form.insertBefore(descBox,firstBtn)


//Delete Btn


const fruits=document.querySelectorAll('.fruit')
for(let i=0;i<fruits.length;i++){

    const beforeBtn=fruits[i].querySelector('.delete-btn')
    const para =document.createElement('p')
    para.textContent='kings of fruits'
    
    fruits[i].insertBefore(para,beforeBtn)
}



const fruit=document.querySelector('.fruits')


// Show the fruit description in italics on the next line
form.addEventListener('submit',function(event){
    event.preventDefault();
    const textToAdd=document.getElementById('fruit-to-add')
    const newLi=document.createElement('li')
    const newLiText=document.createTextNode(textToAdd.value)
newLi.appendChild(newLiText)
newLi.className='fruit'
fruit.appendChild(newLi)
//desc printing
 const descToAdd=document.getElementById('desc-to-add')
 const newPara=document.createElement('p')
 const newParaText=document.createTextNode(descToAdd.value)
 newPara.appendChild(newParaText)
 newPara.style.fontStyle='italic' 
newLi.appendChild(newPara)


    


//Delete Btn
const delBtn=document.createElement('button')
const delBtnText=document.createTextNode('x')
delBtn.appendChild(delBtnText)
delBtn.className='delete-btn'
newLi.appendChild(delBtn)
})



// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter=document.getElementById('filter')
filter.addEventListener('keyup',function(event){
  const textEntered=event.target.value.toLowerCase()
  const fruitItems=document.getElementsByClassName('fruit')
  for(let i=0;i<fruitItems.length;i++){
    const currentFruitText=fruitItems[i].firstChild.textContent.toLowerCase();
    const currentFruitDescText=fruitItems[i].querySelector('p').textContent.toLowerCase();
    if (currentFruitText.indexOf(textEntered)===-1 &&  currentFruitDescText.indexOf(textEntered)===-1 ){
      fruitItems[i].style.display='none'
    }
    
    else{
      fruitItems[i].style.display='list-item'
    }
  }
})

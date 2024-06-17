// Write your code below:
const mainHeading= document.getElementById('main-heading');
mainHeading.textContent='Fruit World'
mainHeading.style.color='orange';

const header=document.getElementById('header');
header.style.backgroundColor='green';

header.style.borderBottom='3px solid orange';

const basketHeading=document.getElementById('basket-heading')
basketHeading.style.color='green';

const thanks=document.getElementById('thanks');
thanks.innerHTML='<p>Please visit us again</p>'

//getElementsByClassName
const fruits=document.getElementsByClassName('fruit');
fruits[2].style.backgroundColor='yellow'

for(let i=0;i<fruits.length;i++){
    fruits[i].style.fontWeight='bold'
}

//getElementsByTagName
const listitems=document.getElementsByTagName('li');
listitems[4].style.color='blue';

for(let i=0;i<listitems.length;i++){
  listitems[i].style.fontStyle='italic'
}
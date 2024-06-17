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

//querySelector and querySelectorAll



const mainHeading=document.querySelector('#main-heading');
mainHeading.style.textAlign='center';

const fruits=document.querySelector('.fruits');
fruits.style.backgroundColor='grey'
fruits.style.padding='30px'
fruits.style.margin='30px'
fruits.style.borderRadius='5px'
fruits.style.listStyleType='none';
const basketHeading=document.querySelector('h2');
basketHeading.style.marginLeft='30px'

const fruititems=document.querySelectorAll('.fruit');
for(let i=0;i<fruititems.length;i++){
  fruititems[i].style.backgroundColor='white'
  fruititems[i].style.margin='10px'
  fruititems[i].style.padding='10px'
  fruititems[i].style.borderRadius='5px';
}
  const Oddfruitsitems=document.querySelectorAll('.fruit:nth-child(odd)');
  for(let i=0;i<Oddfruitsitems.length;i++){
  Oddfruitsitems[i].style.backgroundColor='brown';
    Oddfruitsitems[i].style.color='white'
}



const basket=document.querySelector('#basket-heading');
basket.style.color='brown';

const Evenfruitsitems=document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<Evenfruitsitems.length;i++){
  Evenfruitsitems[i].style.backgroundColor='brown';
  Evenfruitsitems[i].style.color='white';
}
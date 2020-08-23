//console.log(document.title);
// console.log(document.getElementById('idone'));
// console.log(document.getElementsByClassName('one'));
const myElement =document.querySelector('p')
console.log(myElement);
//const element1 = document.querySelectorAll('#idone')
const element1 = document.querySelectorAll('.one')
console.log(element1);
/**  Adding element */
const newP = document.createElement('p')
newP.textContent ='I was added via JS'
document.querySelector('body').appendChild(newP)
/* Adding elemt 2 way*/
var h = document.createElement('h1')
var value = document.createTextNode('hello Dhillon')
h.appendChild(value)
document.querySelector('h1').appendChild(h);
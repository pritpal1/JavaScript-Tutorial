//linked with index.html
localStorage.setItem('name','pritpal');
//get value
let name=localStorage.getItem('name');
console.log(name);
//2nd key with other value
localStorage.setItem('buy','choco')
//update
localStorage.setItem('buy','vanila')
//remove single key with value
// localStorage.removeItem('name')
// let nameRemove=localStorage.getItem('name');
// console.log(nameRemove);
//clear all
//localStorage.clear();
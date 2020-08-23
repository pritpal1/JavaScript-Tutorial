//linked with index.html
const student ={
    name:'prit',
    age:23,
    isActive : true,
}
//convert student object into a string to be stored in local storage
const stuObjToString = JSON.stringify(student)
console.log(typeof stuObjToString);
//store into local
localStorage.setItem('student',stuObjToString);
//convert back into json
const toJSON = JSON.parse(stuObjToString);
console.log(typeof toJSON);
console.log(toJSON.age);


// const myTodo =['Buy bread','go gym', 'work']
// //indexOf() print the index of an element within an array.
//  console.log(myTodo.indexOf('Buy bread'));


//array with object
const newTodos = [{
    title:'Buy Bread',
    isDone:false,
},{
    title:'go gym',
    isDone:false,
},{
    title:'work',
    isDone:true,
}]
//findindex2
const index=newTodos.find(function (todo) {
    return todo.title==='go gym'
})
console.log(index);

//Method 1  FindIndex() returned index
// const findTodo= function (myTodo,title) {
//  const index =myTodo.findIndex(function (todo,index) {
//      return todo.title.toLowerCase() === title.toLowerCase()
//  }) 
//  return myTodo[index]   
// }
// let printme = findTodo(newTodos,'go Gym')
// console.log(printme);

//Method 2 Find() is returned element
// const findTodo= function (myTodo,title) {
//     const titleReturned =myTodo.find(function (todo,index) {
//         return todo.title.toLowerCase() === title.toLowerCase()
//     }) 
//     return titleReturned   
//    }
//    let printme = findTodo(newTodos,'go Gym')
// console.log(printme);





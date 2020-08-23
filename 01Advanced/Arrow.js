// //simple function 
// const sayHello = function(name) {
//      return "hey" +name+ "!"
//  }
//  console.log(sayHello('Pritpal'));

//Arrow function
const sayHello = (name)=> `hey${ name} !`    
    console.log(sayHello('Pritpal'));

const todos=[{
    title:'Buy bread',
    isDone:true,
},{
    title:'Go to Gym',
    isDone:true,
},{
    title:'learn java Script',
    isDone:false,
}]
//filter() get the only value which are true or correct 
const thingDone = todos.filter((todo) => todo.isDone === true)
console.log(thingDone);



    
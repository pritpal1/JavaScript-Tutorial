const todos=[{
title:'wake up',
isDone:true,
},{
    title:'bath',
    isDone:true,
},{
    title:'Eat',
    isDone:false,
},{
    title:'work',
    isDone:false,
}]
const check= todos.filter((todo) => todo.isDone===false)
check.forEach((todo )=>  console.log(todo.title)
);


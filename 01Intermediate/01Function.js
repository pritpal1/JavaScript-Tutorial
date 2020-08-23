//way to write functions
//<****ONE WAY***>
//name of fuction is sayhello
let sayHello = function(name){
console.log(`Greeting msg for ${name}`) //use the $ sign to fetch value of variable
console.log(`hii ${name}`)
}
//calling fuction
sayHello('pritpal');
//<------2nd---------------->
let fullNameMaker = function(fname,lname){
    console.log('WELCOME')
    console.log(`happy to have you, ${fname} ${lname}`)
}
//calling
fullNameMaker('Pritpal','Dhillon')

//<-----------3rd----------->
//function to passing arrguments
let myAdder = function(num1,num2){
    let added = num1 + num2
    return added
}
//2 ways to print 
// let result  = myAdder(3,6)
// console.log(result)
console.log(myAdder(3,6))
//<---------------------->
let myMultiplier = function(num1,num2){
    return num1*num2
}
console.log(myMultiplier(2,3))
//<---------Default Parameter------------->
let guestUser = function(name = 'gppu',course = '2'){
    return 'hello ' + name + ' and ur course is '+course
    }
    console.log(guestUser('preet',1))






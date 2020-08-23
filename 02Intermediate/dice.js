let num1 =22
let num2 =7
result =22/7
console.log(result.toFixed(2));
//to fixed is used to print number after decimal
let float =result.toFixed(2)
console.log(Math.floor(float));//floor to bring down
console.log(Math.ceil(float));//ceil bring up

//random print any number b/w 0 and 1
console.log(Math.random() *6 +1);


let upper =25
let lower=20
let myRandom =Math.floor(Math.random() * (upper-lower + 1)) +lower
//(25-20=5+20=25 the between 20 to 25)
console.log(myRandom);

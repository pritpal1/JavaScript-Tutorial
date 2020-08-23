/*
 coercion is the process of converting value from one type to another
  such as str to num,obj to bool
*/
console.log('5'-5);
console.log('5'+5);//it contact

const type =typeof 5 //its number
console.log(type);
const adder = true + 5 //true consider as 1 and false is 0 in java script
console.log(adder);

const loginDetail = []
const id =loginDetail[0]
if (id!== undefined) {
    console.log('Allow user to Login');
    } else {
console.log('Try again');
}
//value that interpret as False:
// false 0
// ''
// null
// undefined
//true :empty array ,object

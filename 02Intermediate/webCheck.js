let userEmail ='123cbfg'
let password ='1234ioplkhg'
let userCheck = function (user) {
 if (user.includes(123) && user.length >6) {
return true 
 } 
 return false
 }
 let passCheck = function (pass) {
    if ((pass.includes(1234)) && (pass.length >8)) {
        return true 
         } else{
            return false  
         }   
 }
 console.log(userCheck(userEmail));
  console.log(passCheck(password));

// console.log(password.length)
// console.log(userEmail.trim());
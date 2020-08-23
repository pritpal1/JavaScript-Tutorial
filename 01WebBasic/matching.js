let newP=document.createElement('p')
document.querySelector('.myForm').addEventListener('submit', function (event) {
   event.preventDefault();
   let name=event.target.Name.value;
   let mail=event.target.Email.value;
   let pass=event.target.password.value;
   let repass = event.target.Cpassword.value;
   if (pass===repass) {
     newP.textContent=`Welcome!! ${name}`
      // alert("Password match"); 
   } else {
      newP.textContent ="sorry!wrong password"
    //alert("password doesn't match"); 
   }
   document.querySelector('body').appendChild(newP)
   //clear
   let input =document.querySelectorAll('#input')
   input.value =" ";
  })

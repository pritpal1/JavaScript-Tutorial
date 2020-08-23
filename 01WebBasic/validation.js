// document.querySelector('#myform').addEventListener('input',() =>{
// console.log(event.target.value);

// })
function myValidation(){
    let myValue = document.getElementById('myform').value;
    if (isNaN(myValue) || myValue<1 || myValue >20 ) {
    //isNaN () determine whether a value is Nan or not.
        console.log('NOT a valid input');
    } else {
       console.log('This input is OK');     
}
}

document.querySelector('.myForm').addEventListener('submit',(event) =>{
    event.preventDefault();//hide info on url bar
    console.log(event.target.firstName.value);
    console.log(event.target.lastName.value);
    console.log(event.target.password.value);
    //clear the value
    event.target.firstName.value = '';
    event.target.lastName.value = '';
    event.target.password.value = '';
    
})








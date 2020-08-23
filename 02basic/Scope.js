
let iamGlobal ='something global'
if (true) {
    //using let scope of local variable only inside block
    let iamLocal='some local value '
    
    //change the value
    iamGlobal='New value'
    console.log(iamGlobal); 
    console.log(iamLocal);
} 
//scope anywhere
console.log(iamGlobal);
//getting error while try access it. 
//console.log(iamLocal);
//<*---Var---*>
if (true) {
    console.log('Concept of var keyword')
    var imLocal = 'some local values i have :)'
    console.log(imLocal)
}
//using var local variable can access outside the block
console.log(imLocal)

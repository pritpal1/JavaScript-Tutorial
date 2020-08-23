//declare a variable without defined its type  
//let king= 'john'
if(true){
    //let king = 'ram'
     if(true){
         let king = 'sham'
         //without declare variable type variable become global
         //changing value of variable
         king ='ham'
         console.log(king)
     }
}
//access king variable inside the block
if (true) {
    console.log('It is the second part :-' + king)
}
const mycode =[]
mycode.push('wake up')
mycode.push('eat')
mycode.push('work')
mycode.forEach(function (code,i) {
    console.log(`Ur Task no. ${i +1} is: ${code}`)
});

const mycode1=[]
mycode1.unshift('wake up')
mycode1.unshift('eat')
mycode.unshift('work')
for (let index = mycode.length-1; index >=0; index--) {
    console.log(mycode[index]) ;
    
}
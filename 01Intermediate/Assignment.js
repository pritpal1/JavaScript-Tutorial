let getGrade = function( currentMarks,totalMarks){
let Percent = (currentMarks/totalMarks)*100
let Grade=''

if(Percent >=90){
  Grade='A'
} else if(Percent >=80){
    Grade='B'
}else if(Percent >=70){
    Grade='C'
}else if(Percent >=60){
    Grade='D'
}else {
    Grade='Fail'
}
return `Ur result is ${Grade} and percentage is ${Percent} `
}
//function calling
let Result=getGrade(92,150)
console.log(Result)
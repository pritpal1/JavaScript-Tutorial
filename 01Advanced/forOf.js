var john  = {
    name:'i m john',
    age:24,
    isActive:true
}
var marry = {
    name:'i m marry',
    age:20,
    isActive:true
}
var amr = {
    name:'i m amr',
    age:29,
    isActive:false
}
let users= new Map()
users.set('john',john)//  'john user define'
users.set('marry',marry)
users.set('amr',amr)
// for (const keys of users.keys()) {
//     console.log(keys);
// }
// for (const values of users.values()) {
//     console.log(values);
// }
// for (const values of users.values()) {
//     console.log(values.name);
// }
// for (const [kes,values] of users.entries()) {
//  console.log(keys + '=' + values.name);  
// }

/*  using for each*/
//users.forEach((value,key)=> console.log(key + '=' + value.name))
/*  Assignment
*/ 
var arrofArr =[['one','1'] , ['two','2'],['three','3']]
var newMap = new Map(arrofArr)
for (const [keys,values] of newMap.entries()) {
    console.log(keys + '=' + values);  
   }
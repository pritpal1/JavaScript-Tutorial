//objects
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
    name:'i m amar',
    age:29,
    isActive:false
}
//map is object it return itretable (smthing u can look over)
 let users= new Map()
users.set('john',john)//  'john user define'
users.set('marry',marry)
users.set('amr',amr)
console.log(users);
console.log(users.keys());
console.log(users.values());
console.log(users.size);
console.log(users.get('amr'));









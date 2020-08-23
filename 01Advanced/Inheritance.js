class User{
    constructor(Fname,Lname,credit){
      this.Fname=Fname;
      this.Lname=Lname;
      this.credit=credit;  
    }

    getFulName(){
        let fulname = `${this.Fname} ${this.Lname} is my FullName`;
        return fulname;
    }
}
class Teacher extends User{
constructor(Fname,Lname,credit,subject){
   super(Fname,Lname,credit)
   this.subject = subject; 
}
getFulName(){
    let fulname = `${this.Fname} ${this.Lname} 
    is my FullName and i teach ${this.subject}`;
    return fulname;
           }
  drink(name){
console.log(`My fav Drink is ${name}`);
  }         
}
const obj = new Teacher('prit','kaur',30,'java');
//console.log(obj);
console.log(obj.getFulName());
console.log(obj.drink('coke'));

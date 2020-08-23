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
    editName(newName){
            const myName =newName.split(' ');//string to array
            this.Fname = myName[1];//set position to array
            this.Lname = myName[0];
    }
}
const obj = new User('prit','kaur',30);
//console.log(obj);
console.log(obj.getFulName());
obj.editName('pritpal kaur')
console.log(obj.getFulName());
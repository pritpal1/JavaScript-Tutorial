//method and constructed
//cam is object
const cam={
    price:600,
    brand:'canon',

  func:  () => {
    // return `The camera ${cam.brand} is of ${cam.price}`
    return `The camera ${this.brand} is of ${this.price}`
    //this key cant used while Arrow function
        }
}
console.log(cam.func());

//redux people
//const fun =()=>({key:'value'})



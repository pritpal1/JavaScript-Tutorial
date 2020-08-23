let myTodos ={
    day:'Monday',
    meeting:0,
    meetDone:0,
    addMeeting: function(num){ //addMeeting is a function name
      this.meeting =this.meeting + num
        //console.log(this) //this keyword refer to current class veriable 
    },
    Summary: function(){
return `U have ${this.meeting} of meeting today`
    }
}
myTodos.addMeeting(5)//passing value
console.log(myTodos.Summary())

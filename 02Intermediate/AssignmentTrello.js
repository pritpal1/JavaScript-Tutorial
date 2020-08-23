//******Assignment:-Method and Keyword */
//reset fn or handle meeting
let mytodo={
    meets:10,
    meetdone:0,

    meetDone:function (meetingD=0) {
        this.meets=this.meets - meetingD
    },
    show: function () {
        return`ur left meeting is ${this.meets}`
    },
    reset: function() {
        this.meets=0,
       this.meetdone=0},
}
mytodo.meetDone(5)
console.log(mytodo.show())

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    // console.log(this)
    return this;
};

var currentDate = new Date();
var currentDate2 = new Date();

// console.log(currentDate)
// to add 4 days to current date
var alertDate = currentDate.addDays(4);

var startDate =  currentDate2.getFullYear()+'/'+(currentDate2.getMonth()+1)+'/'+currentDate2.getDate();
var date = alertDate.getFullYear()+'/'+(alertDate.getMonth()+1)+'/'+alertDate.getDate();



// alertDate.split('T')[0];
console.log(startDate)
console.log(date);
// console.log(a);

// var LMP = "04/30/2018";
// var date1 = new Date();
// var date2 = new Date(LMP);
// var timeDiff = Math.abs(date2.getTime() - date1.getTime());
// var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

// var wk = diffDays % 7;
// var wk2 = diffDays / 7;
// wk2 = wk2.toString();
// var wk3 = Math.round(('0.' + wk2.split('.').pop()) * 7)


// console.log(diffDays + ' Days after LMP');
// console.log(wk + " weeks " + wk3 + " days")

// function getTranDate(){
    // var someDate = new Date();
    // var numberOfDaysToAdd = n;
    // var someDate2 = (someDate.getDate() + 365); 
    
    // var dd = someDate.getDate();
    // var mm = someDate.getMonth() + 1;
    // var y = someDate.getFullYear();
    
    // var someFormattedDate = dd + '/'+ mm + '/'+ y;
    // console.log(someFormattedDate)
    // console.log(someDate)
    // console.log(someDate2)
    // return someFormattedDate
    // }

    // getTranDate()
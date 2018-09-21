var startDate = "2018/02/20"

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

var today = new Date();
var Today = `${today.getFullYear()}/${(today.getMonth()+1)}/${today.getDate()}`;

console.log(Today);

function week(startDate){
   
    var newRent = new Date(startDate);
    var wAlertDate = newRent.addDays(351);
    var wAlert = `${wAlertDate.getFullYear()}/${(wAlertDate.getMonth()+1)}/${wAlertDate.getDate()}`;
    console.log(wAlert);
}

function month(startDate){
    var newRent = new Date(startDate);
    var mAlertDate = newRent.addDays(335);
    var mAlert = `${mAlertDate.getFullYear()}/${(mAlertDate.getMonth()+1)}/${mAlertDate.getDate()}`;
    console.log(mAlert);
}

function expiry(startDate){
    var newRent = new Date(startDate);
    var expiry = newRent.addDays(365);
    var expDate = `${expiry.getFullYear()}/${(expiry.getMonth()+1)}/${expiry.getDate()}`;
    console.log(expDate);
}

        expiry(startDate);
        month(startDate);
        week(startDate);
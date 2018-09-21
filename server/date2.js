function rent(duration){var date = "03/09/2018"
var date2 = "03/09/2018"
var d = date2.split('/', 2)
console.log(d)

d2 = parseInt(d[2])-1
console.log(d2)

date = date.split('/').pop()
var years = (parseInt(date)+ duration)
// console.log(parseInt(date) + 1)

var date3 = date2.replace('2018', years)
console.log(date3)

}
rent(2)


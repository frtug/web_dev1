let date = new Date();

console.log(date.getDay())
 
let month = date.getMonth()
let year = date.getFullYear();

console.log(month,year)


const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

function monthChanger(){
    let firstDay = new Date(year,month,1).getDay() // first day of the month's week, 
    let currMonthDays = new Date(year,month+1,0).getDate() //  current month no of days 

    let lastMonthDays = new Date(year,month,0).getDate() // previous month no of days
    
    let lastDay = new Date(year,month,currMonthDays).getDay();

    console.log(lastDay)

    
} 
monthChanger()


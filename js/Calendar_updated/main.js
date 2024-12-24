let date = new Date();

console.log(date.getDay())
 
let month = date.getMonth()
let year = date.getFullYear();

console.log(month,year)


const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]


const days = document.querySelector('.days')

const m = document.querySelector('.month-year > span')
const y = document.querySelector('.month-year > span + span')

console.log(days)
function monthChanger(){
    let firstDay = new Date(year,month,1).getDay() // first day of the month's week, 
    let currMonthDays = new Date(year,month+1,0).getDate() //  current month no of days 

    let lastMonthDays = new Date(year,month,0).getDate() // last month's no of days
    
    let lastDay = new Date(year,month,currMonthDays).getDay();

    console.log(lastDay)
    
    m.innerHTML = months[month]
    y.innerHTML = year

    let u = ""

    // pervious month days 
    for(let i= 0;i<firstDay;i++){
        u += `<li class="inactive">${lastMonthDays - firstDay+1 + i}</li>`
    }

     // current days
     for(let i= 1;i<=currMonthDays;i++){
        u += `<li class="active">${i}</li>`
    }
    
    // next month days 
    // let j = 1;
    for(let i= lastDay+1;i<=6;i++){

        u += `<li class="inactive">${i-lastDay}</li>`
        // j++;
    }
    days.innerHTML = u

} 
monthChanger()

const prev = document.querySelector('.action > button')

const next = document.querySelector('.action > button + button')

prev.addEventListener('click',()=>{
    month--;
    if(month < 0){
        date = new Date(year,month,1)
        year = date.getFullYear();
        month = date.getMonth();
    }
    
    monthChanger();

})

next.addEventListener('click',()=>{
    month++;

    if(month > 11){
        date = new Date(year,month,1)
        year = date.getFullYear();
        month = date.getMonth();
    }
    
    monthChanger();
})


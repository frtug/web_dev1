// 2 dec 

let input = document.getElementById('input');
let ul = document.getElementById('ul')

let btn = document.getElementById('btn')

let cancel = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16.414,15 c0,0,3.139,3.139,3.293,3.293c0.391,0.391,0.391,1.024,0,1.414c-0.391,0.391-1.024,0.391-1.414,0C18.139,19.554,15,16.414,15,16.414 s-3.139,3.139-3.293,3.293c-0.391,0.391-1.024,0.391-1.414,0c-0.391-0.391-0.391-1.024,0-1.414C10.446,18.139,13.586,15,13.586,15 s-3.139-3.139-3.293-3.293c-0.391-0.391-0.391-1.024,0-1.414c0.391-0.391,1.024-0.391,1.414,0C11.861,10.446,15,13.586,15,13.586 s3.139-3.139,3.293-3.293c0.391-0.391,1.024-0.391,1.414,0c0.391,0.391,0.391,1.024,0,1.414C19.554,11.861,16.414,15,16.414,15z"></path>
</svg>`

const options = { hour12: true }; 
let sort = document.getElementById('sort');

let del = document.querySelectorAll('.del')

// 

function del_item(e){
    // console.log(e)
    console.log(e.target.classList)
    if(e.target.classList.contains('del')){
        e.target.parentElement.remove()
}
    // if(e.target.classList.contains('del'))
    //     e.target.parentElement.remove()
}

function sortTodo(e){
    console.log(e.target.value)
    let order = e.target.value
    let items = Array.from(ul.children)
    console.log(items)

    items.sort((a,b)=>{
        let time1 = a.querySelector('.time').getAttribute('data-timestamp');
        let time2 = b.querySelector('.time').getAttribute('data-timestamp');
        if(order == 'asc'){
            return time1-time2
        }
        else {
            return time2-time1
        }
    })
    ul.innerHTML = ""
    items.forEach((item)=> ul.appendChild(item))
}
function addTodo(){
    console.log(input.value)
    let li = document.createElement('li')
    let d = new Date();


    li.innerHTML = input.value + 
    `<i class="time" data-timestamp="${d.getTime()}">${d.toLocaleTimeString('en-US', options)}</i>
<button class="del">
    del
</button>`
    if(input.value != "")
        ul.appendChild(li)
    input.value = "" // 

    del = document.querySelectorAll('.del')
    console.log(del)
    ul.addEventListener('click',del_item)
    // del.forEach((de)=>{
    //     // console.log(de)
    //     de.addEventListener('click',del_item)
    // })
} 
btn.addEventListener('click',addTodo)

sort.addEventListener('change',sortTodo)


// sort.addEventListener('change', (e) => {
//     const order = e.target.value;
//     if (order === 'asc' || order === 'desc') {
//         sortTodos(order);
//     }
// });
console.log(input)
console.log(ul)






//-------------------------------------


// ----- 28 nov 
//carlosul


// let urls = ["https://www.w3schools.com/html/pic_trulli.jpg","https://www.w3schools.com/html/img_girl.jpg","https://www.w3schools.com/html/img_chania.jpg"]

// var image = document.getElementsByTagName('img')[0]
// var left = document.getElementById('left')
// var right = document.getElementById('right')
// var currentIndex = 0;

// function decrement(){
//     currentIndex--;
//     if(currentIndex < 0){
//         // currentIndex = Math.abs(currentIndex%urls.length);
//         currentIndex = urls.length -1 
//     } 
//     image.setAttribute('src',urls[currentIndex])
// }
// function increment(){
//     currentIndex++;
//     if(currentIndex > urls.length-1){
//         // currentIndex = currentIndex%urls.length;
//         currentIndex = 0;
//     }
//     image.setAttribute('src',urls[currentIndex])

// }

// left.addEventListener('click',decrement)
// right.addEventListener('click',increment)




// ------------------------------
// console.log("hello")
// const body = document.getElementsByTagName('body')[0]
// // console.log(body)
// // const p = document.createElement('p');
// // p.innerHTML = `lorem text is here`
// const h1 = document.getElementsByTagName('h1')[0]
// console.log(h1)
// function changeStyle(){
//     h1.classList.toggle('style_class')
// }
// const button = document.createElement('button')
// button.innerHTML = 'Click me'
// button.setAttribute('class','btn')
// body.appendChild(button)
// button.addEventListener('click',changeStyle)
// // const input = document.querySelector('input[type=checkbox]')

// // input.style.accentColor = 'red'
// // h1.style.color = 'red'
// // h1.style.backgroundColor = 'yellow'
// h1.classList.remove('style_class')

// input.setAttribute('value','ch')
// console.log(input.getAttribute('value'))

// input.removeAttribute
// console.log(input.getAttributeNames())
// body.removeChild(h1)
// body.appendChild(p)
// console.log(p)




// let date = {
//     "Jan":31,
//     "Feb":28,
//     "Mar":31,
//     "Apr":30,
//     "May":31,
//     "Jun":30,
//     "Jul":31,
//     "Aug":31,
//     "Sep":30,
//     "Oct":31,
//     "Nov":30,
//     "Dec":31,
// }
// for(let c in date){
//     console.log(c,date[c])
//     for(let i=1;i<=date[c];i++){
//         console.log(i)
//     }
// }
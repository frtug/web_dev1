// console.log("hello")
const body = document.getElementsByTagName('body')[0]
// console.log(body)
// const p = document.createElement('p');
// p.innerHTML = `lorem text is here`
const h1 = document.getElementsByTagName('h1')[0]
console.log(h1)
function changeStyle(){
    h1.classList.toggle('style_class')
}
const button = document.createElement('button')
button.innerHTML = 'Click me'
button.setAttribute('class','btn')
body.appendChild(button)
button.addEventListener('click',changeStyle)
// const input = document.querySelector('input[type=checkbox]')

// input.style.accentColor = 'red'
// h1.style.color = 'red'
// h1.style.backgroundColor = 'yellow'
h1.classList.remove('style_class')

// input.setAttribute('value','ch')
// console.log(input.getAttribute('value'))

// input.removeAttribute
// console.log(input.getAttributeNames())
// body.removeChild(h1)
// body.appendChild(p)
// console.log(p)




let date = {
    "Jan":31,
    "Feb":28,
    "Mar":31,
    "Apr":30,
    "May":31,
    "Jun":30,
    "Jul":31,
    "Aug":31,
    "Sep":30,
    "Oct":31,
    "Nov":30,
    "Dec":31,
}
for(let c in date){
    console.log(c,date[c])
    for(let i=1;i<=date[c];i++){
        console.log(i)
    }
}
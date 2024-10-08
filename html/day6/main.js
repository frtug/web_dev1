


var canvas2 = document.querySelector('#myCanvas2')
console.log(canvas2)
var ctx = canvas2.getContext("2d");
ctx.beginPath();


// ctx.fillStyle = "black"
// ctx.fillRect(10,0,10,400)

// ctx.moveTo(100,100)
// ctx.lineTo(0,100)
// ctx.lineTo(50,0)
// ctx.lineTo(100,100)
// ctx.stroke()

// const grad = ctx.createLinearGradient(0,130,0,0)
// grad.addColorStop(0, "lightblue");
// grad.addColorStop(.5, "darkblue");
// grad.addColorStop(1, "orange");
// ctx.fillStyle = grad;
// ctx.fillRect(10,10, 280,130);


const radial = ctx.createRadialGradient(150,75,.2,150,75,150)
radial.addColorStop(0, "white");

radial.addColorStop(0.1, "black");
radial.addColorStop(.2, "lightBlue");
radial.addColorStop(.5, "darkblue");
radial.addColorStop(1, "orange");


// Fill rectangle with gradient
ctx.fillStyle = radial;
ctx.fillRect(10,10, 280,130);

ctx.font = "50px Arial"
ctx.strokestyle = radial;
ctx.strokeText("HELLO CLASS",100,100)



// function downloadPng(){
//     var link = canvas2.toDataURL("image/png")
//     this.href = link
// }
// function downloadJpg(){
//     var link = canvas2.toDataURL("image/png")
//     this.href = link
// }
function downloadFun(){
    console.log(this.value)
    var format = this.value;
    var link = canvas2.toDataURL(`image/${format}`)
    var download_link = document.getElementById('gf');
    download_link.href = link
    download_link.download = `image.${format}`
    console.log(this)
}
var link = canvas2.toDataURL("image/png")
var download_link = document.getElementById('gf');
download_link.href = link


var lin = document.getElementById('do_sel')
console.log(lin)
lin.addEventListener('change',downloadFun)








// var c = document.getElementById("myCanvas"); 
// var ctx = c.getContext("2d");
// // ctx.moveTo(0,0)
// // ctx.lineTo(500,400)

// ctx.beginPath();

// ctx.fillStyle = "black"
// ctx.fillRect(10,0,10,400)

// ctx.fillStyle = "red"
// ctx.fillRect(10,0,150,75)

// ctx.fillStyle = "white"
// ctx.fillRect(10,75,150,75)

// ctx.fillStyle = "green"
// ctx.fillRect(10,150,150,75)

// ctx.arc(75,112.5,20,0,2*Math.PI)
// ctx.s = "rgb(0 255 0 / 50%)";
// ctx.stroke();


// ctx.fillStyle = "rgb(0 255 0 / 10%)"
// ctx.fillRect(310,150,150,75)


// ctx.strokeStyle = "red";
// ctx.lineWidth = 5;
// ctx.strokeRect(0,0, 400,405);








const myHeading = document.getElementById('myHeading')
myHeading.innerText = "Martin"
const firstLink = document.querySelector("nav ul li a")
firstLink.setAttribute("href","https://www.google.co.uk")
const colourButtons  = document.querySelectorAll(".colPicker")
console.dir(colourButtons )

// for (let i = 0; i < colourButtons.length; i++) {
//     colourButtons[i].style.backgroundColor = "green";
// }

// button example

document.getElementById("myTestBtn").addEventListener("click", (ev)=>{
    // console.dir(ev)
    console.info(ev.target)
})

const redBtn = document.querySelector(".red")
redBtn.addEventListener("click", function(){
    document.body.setAttribute("class", "redBack")
})

const blueBtn = document.querySelector(".blue")
blueBtn.addEventListener("click", function(){
    document.body.setAttribute("class", "blueBack")
})

const resetBtn = document.querySelector(".reset")
resetBtn.addEventListener("click", function(){
    document.body.removeAttribute("class")
})
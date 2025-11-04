const myHeading = document.getElementById('myHeading')
myHeading.innerText = "My Demo Website"
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

// js/main.js
let imageAr = [
    'images/view1.jpg',
    'images/view2.jpg',
    'images/view3.jpg',
    'images/view4.jpg',
    'images/view5.jpg',
    'images/view6.jpg'
  ];
  
  let currentIndex = 0;
  
  function chgImage() {
    currentIndex++;
    if (currentIndex >= imageAr.length) {
      currentIndex = 0;
    }
    document.getElementById('myImages').setAttribute('src', imageAr[currentIndex]);
  }

  let intervalId = setInterval(chgImage, 2000);

  // Stop the interval after 10 seconds
  setTimeout(function() {
    clearInterval(intervalId);
    console.info('Image rotation stopped');
  }, 10000);

  document.getElementById('myImages').addEventListener('click', chgImage);

  
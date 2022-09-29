"use strict"

let colorPicker = document.querySelector("color-picker")
let colorBars = document.getElementById("color-bars")
const output = document.getElementById("output")



// create a function for each scheme
// attach each scheme to said function
// attach button to funciton callback

const getColorButton = document.getElementById("get-color")

getColorButton.addEventListener("click", function(){
console.log("button clicked")
   
})

 // Scheme
 fetch("https://www.thecolorapi.com/scheme?hex=FF0&mode=monochrome&count=5")
 .then( response => response.json())
 .then( data => {
    const colorArray = data
    const testArray = colorArray.toString().slice(0,4)
    
     for (let post of testArray) {
         output.innerHTML = `
             <div id="color-one">${post[0]}</div>
             <div id="color-two">${post[1]}</div>
             <div id="color-three">${post[2]}</div>
             <div id="color-four">${post[3]}</div>
             <div id="color-five">${post[4]}</div>
         `
     }
 console.log(data)
 })

 
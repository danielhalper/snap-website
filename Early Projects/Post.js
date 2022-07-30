
function newinput () {
let meters= document.getElementById("meters");
let volume= document.getElementById("volume");
let input= document.getElementById("input");
let feet=(input.value *2.5).toFixed(3);
let gallons=(input.value *16).toFixed(3);
meters.innerText= `${input.value} meters= ${feet} feet`
volume.innerText= `${input.value} gallons= ${gallons} liters`

}
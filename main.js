var xPosition;
var yPosition;
var laser1 = document.getElementById('one')
console.log(laser1)
var laser2 = document.getElementById('two')

document.addEventListener("click", getClickPosition, false);
// When the click happens, we have an event handler that will react to that click:

let eye = "left"
function toggleEye() {
    if (eye === "left") eye = "right"
    else eye = "left"
}

const placeLaser = (toggledEye) => {
    if (toggledEye === "left") {
        laser1.style.left = xPosition + "px"
        laser1.style.top = yPosition + "px"
        console.log('left')
    } else {
        laser2.style.left = xPosition + "px"
        laser2.style.top = yPosition + "px"
        console.log('right')
    }
}

function getClickPosition(e) {
    xPosition = e.clientX - 90;
    yPosition = e.clientY - 480;
    
    console.log(xPosition)
    console.log(yPosition)

    placeLaser(eye)
    toggleEye();
}


console.log(laser1.style.left)
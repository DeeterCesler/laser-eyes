var xPosition;
var yPosition;
var laser1 = document.getElementById('one')
var laser2 = document.getElementById('two')
let eye = "left"

document.addEventListener("click", getClickPosition, false);

function toggleEye() {
    if (eye === "left") eye = "right"
    else eye = "left"
}

const placeLaser = (toggledEye) => {
    if (toggledEye === "left") {
        laser1.style.left = xPosition + "px"
        laser1.style.top = yPosition + "px"
    } else {
        laser2.style.left = xPosition + "px"
        laser2.style.top = yPosition + "px"
    }
}

function getClickPosition(e) {
    xPosition = e.clientX - 90;
    yPosition = e.clientY - 480;

    placeLaser(eye)
    toggleEye();
}

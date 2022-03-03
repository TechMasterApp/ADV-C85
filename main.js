canvas = document.getElementById("cv")
pencil = canvas.getContext("2d")
bgImage = "mars.jpg"
image = "rover.png"
rx = 0
ry = 0
window.addEventListener("keydown", keyPress)

function add() {
    bgImgAdd = new Image()
    bgImgAdd.onload = uploadBackground
    bgImgAdd.src = bgImage
    imgAdd = new Image()
    imgAdd.onload = uploadImage
    imgAdd.src = image
}

function uploadBackground() {
    pencil.drawImage(bgImgAdd, 0, 0, 800, 600)
}

function uploadImage() {
    pencil.drawImage(imgAdd, rx, ry, 200, 150)
}

function keyPress(e) {
    keyPressed = e.keyCode

    if (keyPressed == 37) {
        console.log("Left")
        left()
    }

    if (keyPressed == 38) {
        console.log("Up")
        up()
    }

    if (keyPressed == 39) {
        console.log("Right")
        right()
    }

    if (keyPressed == 40) {
        console.log("Down")
        down()
    }
}

function left() {
    if (rx > 0) {
        rx=rx-10
        uploadBackground()
        uploadImage()
    }
}

function up() {
    if (ry > 0) {
        ry=ry-10
        uploadBackground()
        uploadImage()
    }
}

function right() {
    if (rx < 600) {
        rx=rx+10
        uploadBackground()
        uploadImage()
    }
}

function down() {
    if (ry < 450) {
        ry=ry+10
        uploadBackground()
        uploadImage()
    }
}
var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia(
        {
            video: true
        }
    )
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(function (error) {
            console.log("Camera didnt works for some reason");
        });
}

function updateBackground() {
    changeColor(document.getElementById("colorSelector").value);
}

function defaultColor() {
    const defaultGreen = "#00FF00";
    changeColor(defaultGreen);
}

function changeColor(color) {
    document.body.style.backgroundColor = color;
    const colorSelector = document.getElementById("colorSelector");
    colorSelector.value = color;
    colorSelector.select();
    colorSelector.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

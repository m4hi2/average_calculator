var inputElement = document.getElementById("number");
inputElement.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        processNumber();
    }
});
function processNumber() {
    inputNumber = document.getElementById("number");
    console.log(inputNumber.value);
    inputNumber.value = "";
}
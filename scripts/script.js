var inputElement = document.getElementById("number");
inputElement.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        number();
    }
});
function number() {
    inputNumber = document.getElementById("number");
    console.log(inputNumber.value);
    inputNumber.value = "";
}
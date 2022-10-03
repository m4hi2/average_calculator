var inputElement = document.getElementById("number");
inputElement.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        process();
    }
});
function process() {
    inputNumber = document.getElementById("number");
    addNumberToDisplay(inputNumber.value);
    console.log(inputNumber.value);
    inputNumber.value = "";
}

function addNumberToDisplay(number) {
    ul_element = document.getElementById("added_numbers");
    var li_number = document.createElement('li');
    li_number.appendChild(document.createTextNode(number));

    ul_element.appendChild(li_number);
}

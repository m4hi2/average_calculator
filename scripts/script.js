var sum = 0;
var avg = 0;
var count = 0;

var inputElement = document.getElementById("number");
inputElement.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        process();
    }
});
function process() {
    inputNumberElement = document.getElementById("number");
    addNumberToDisplay(inputNumberElement.value);
    sum  = calculateSum(inputNumberElement.value, sum);
    updateSumResult();
    increaseCount();
    updateAvg();
    inputNumberElement.value = "";
}

function addNumberToDisplay(number) {
    ulElement = document.getElementById("added_numbers");
    liNumber = document.createElement('li');
    liNumber.appendChild(document.createTextNode(number));

    ulElement.appendChild(liNumber);
}

function calculateSum(number, sum) {
    newSum = Number(number) + sum;
    return newSum
}

function updateSumResult() {
    sumResultElement = document.getElementById("sum_result");
    sumResultElement.innerText = sum;
}

function increaseCount() {
    count += 1;

    console.log(count);
}

function calculateAvg() {
    avg = sum / count;

    return avg;
}

function updateAvg() {
    calculateAvg();
    avgResultElement = document.getElementById("avg_result");
    avgResultElement.innerText =  avg;
}
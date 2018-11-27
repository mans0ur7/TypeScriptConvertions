var result = document.getElementById("result");
function GramsToOunces(value) {
    result.innerHTML = (parseFloat(value) / 28.3495) + " ounces";
}
function OuncesToGrams(value) {
    result.innerHTML = (parseFloat(value) * 28.3495) + " grams";
}

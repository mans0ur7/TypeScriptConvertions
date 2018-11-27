let result = <HTMLInputElement>document.getElementById("result");

function GramsToOunces(value: string) {
    result.innerHTML = (parseFloat(value) / 28.3495) + " ounces";
}

function OuncesToGrams(value: string) {
    result.innerHTML = (parseFloat(value) * 28.3495) + " grams";
}

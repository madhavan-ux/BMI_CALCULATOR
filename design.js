function calculateBMI() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    if(height === "" || weight === "") {
        alert("Please enter values for both height and weight.");
        return;
    }

    var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    var result = "Your BMI is " + bmi + ". ";

    if(bmi < 18.5) {
        result += "This is considered underweight.";
    } else if(bmi >= 18.5 && bmi < 25) {
        result += "This is considered normal.";
    } else if(bmi >= 25 && bmi < 30) {
        result += "This is considered overweight.";
    } else {
        result += "This is considered obese.";
    }

    document.getElementById('result').innerText = result;
}
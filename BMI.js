function bmi() {
    var w = parseFloat(document.getElementById("w").value);
    var h = parseFloat(document.getElementById("h").value) / 100;
    var r = document.getElementById("msg");

    var BMI = (w/(h * h));

    document.getElementById("msg").innerHTML = "Your BMI is " + Math.round(BMI).toLocaleString('en-in');
  }

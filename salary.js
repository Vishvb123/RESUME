
function calculateSalary() {
    var hourly = document.getElementById("hourly").value;
    var hours = document.getElementById("hours").value;

    var wage = parseFloat(hourly);
    var hrs = parseFloat(hours);

    var salary = wage * hrs * 52;

    document.getElementById("result").innerHTML = "Annual Salary: $" + salary.toFixed(2);
}

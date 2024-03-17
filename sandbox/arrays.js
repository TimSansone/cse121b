// example 1
// const steps = ["one", "two", "three"];
// const stepsHtml = steps.map(function (step) {
//    return `<li>${step}</li>`;
// });
// document.getElementById("myList").innerHTML = stepsHtml.join();

//example 2
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
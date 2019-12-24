let a = +prompt("Enter first side of triangle");
let b = +prompt("Enter second side of triangle");
let c = +prompt("Enter third side of triangle");

if ((a === '' || undefined) || (b === '' || undefined) || (c === '' || undefined)) {
    alert('Input values should be ONLY numbers ');
} else if ((a == 0) || (b == 0) || (c == 0)) {
    alert('A triangle must have 3 sides with a positive definite length ');
} else if (a && b && c > 0) {
    alert('sides of triangle: ' + a + ", " + b + ", " + c);
}
if (a == b && b == c) {
    console.log("Equilateral triangle");
} else if (a == b || a == c) {
    console.log('Isosceles triangle');
} else if (a != b && a != c && b != c) {
    console.log('Scalene triangle');
} else {
    console.log("Triangle doesn’t exist");
}
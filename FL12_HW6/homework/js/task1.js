let a, b, c;
a = +prompt("Enter first value for the quadratic equation a");
b = +prompt("Enter second value for the quadratic equation b");
c = +prompt("Enter third value for the quadratic equation c");
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Invalid input data");
} else {
    let discriminant = b * b - 4 * a * c;
    console.log("Discriminant is:" + discriminant);
    if (discriminant < 0) {
        console.log("no solution");
    } else if (discriminant === 0) {
        let x = - b / (2 * a);
        console.log("X = " + x);
    } else {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log("X1 = " + x1);
        console.log("X2 = " + x2);
    }
}
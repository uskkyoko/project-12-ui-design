console.log("Before declarations:");
console.log("typeof calculateArea:", typeof calculateArea);  
//console.log("typeof calculatePerimeter:", typeof calculatePerimeter);

console.log(getCalculation("area")("circle", 10));
//console.log(getCalculation("perimeter")("square", 5));

//1
function calculateArea(shape, value) { //function declaration here, no error will occurr | hoisted
    if (shape === 'circle') {
        return Math.PI * Math.pow(value, 2);
    }
    if (shape === 'square') {
        return Math.pow(value, 2);
    }
    else{
        return 'Invalid shape';
    }
}
const calculatePerimeter = function (shape, value) { //fuction expression here, will cause an arrror if we call it before
    if (shape === 'circle') {
        return 2 * Math.PI * value;
    }
    if (shape === 'square') {
        return 4 * value;
    }
    else{
        return 'Invalid shape';
    }
}
//2
function getCalculation(calculationType) {
    if (calculationType === 'area') {
        return calculateArea;
    }
    if (calculationType === 'perimeter') {
        return calculatePerimeter;
    }
    else{
        return 'Invalid calculation type';
    }
}
//3
console.log("\nAfter declarations:");
console.log("typeof calculateArea:", typeof calculateArea);
console.log("typeof calculatePerimeter:", typeof calculatePerimeter); 

console.log(getCalculation("area")("circle", 10));
console.log(getCalculation("perimeter")("square", 5));

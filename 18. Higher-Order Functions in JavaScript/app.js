const radius = [3, 1, 2, 4];

Array.prototype.calculate = function (fn) {
  const output = [];
  for (const r of this) {
    output.push(fn(r));
  }
  return output;
};

function calculateArea(r) {
  return Math.PI * r * r;
}

function calculateCircumference(r) {
  return 2 * Math.PI * r;
}

function calculateDiameter(r) {
  return 2 * r;
}

console.log(radius.calculate(calculateArea));
console.log(radius.calculate(calculateCircumference));
console.log(radius.calculate(calculateDiameter));

/* Similar to map method of Array */

console.log(radius.map(calculateArea));
console.log(radius.map(calculateCircumference));
console.log(radius.map(calculateDiameter));

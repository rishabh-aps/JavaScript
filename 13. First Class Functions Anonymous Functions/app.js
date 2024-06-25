//Function Statement
fn();
function fn() {
  console.log("Hello World");
}

//Function Expression
console.log(fn2());
const fn2 = function () {
  return "Hello World";
};

//Anonymous Function

/* function () {
  return "JavaScript is a beautiful programming language";
};
 */

//Named Function Expression
const fn3 = function sayHello() {
  console.log("Hello");
};

fn3();
sayHello();

// Parameters
function sum(a, b) {
  console.log(a + b);
}

// Arguments
sum(2, 3);

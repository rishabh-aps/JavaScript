console.log("Start");

setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);

fetch("https://api.nextflix.com").then(function cbF() {
  console.log("CB Netflix");
});

console.log("End");

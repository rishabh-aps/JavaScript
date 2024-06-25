console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 1000);

console.log("End");

let startDate = new Date();
let endDate = startDate;
while (endDate < startDate + 90000) {
  endDate = new Date().getTime();
}

console.log("While expires");

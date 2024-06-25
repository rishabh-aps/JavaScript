function attachEvenListners() {
  let count = 0;

  document.getElementById("clickMe").addEventListener("click", function () {
    console.log("Button Clicked", ++count);
  });
}
attachEvenListners();

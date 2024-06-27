const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  processData(data, (err, processedData) => {
    if (err) {
      console.log("Error processing data:", err);
      return;
    }
    fs.writeFile("output.txt", processedData, (err) => {
      if (err) {
        console.log("Error writing file:", err);
        return;
      }
      console.log("Data processed and saved successfully!");
    });
  });
});

function processData(data, callback) {
  setTimeout(() => {
    callback(null, data.toUpperCase());
  }, 5000);
}

const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest(); // Http Request Object

  request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("Could not fetch data", undefined);
    }
  });

  // request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.open("GET", "./todos/" + resource + ".json");

  request.send();
};

getTodos("gupta", (err, data) => {
  console.log(data);
  getTodos("rishabh", (err, data) => {
    console.log(data);
    getTodos("saun", (err, data) => {
      console.log(data);
    });
  });
});

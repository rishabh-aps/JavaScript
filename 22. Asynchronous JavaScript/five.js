const getTodos = (callback) => {
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
  request.open("GET", "todos.json");

  request.send();
};

getTodos((err, data) => {
  console.log("Callback fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

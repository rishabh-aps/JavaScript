const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Error getting resource");
      }
    });
    request.open("GET", "./todos/" + resource + ".json");
    request.send();
  });
};

getTodos("gupta")
  .then((data) => {
    console.log("Promise 1 resolved:", data);
    return getTodos("rishbh");
  })
  .then((data) => {
    console.log("Promise 2 resolved:", data);
    return getTodos("saun");
  })
  .then((data) => {
    console.log("Promise 3 resolved:", data);
  })
  .catch((err) => {
    console.log("Promise rejected:", err);
  });

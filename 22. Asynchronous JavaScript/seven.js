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
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

/* Promises example 

const getSomething = () => {
  return new Promise((resolve, reject) => {
    // fetch something
    resolve("some data");
    // reject("some error");
  });
};

getSomething().then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);


getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });


*/

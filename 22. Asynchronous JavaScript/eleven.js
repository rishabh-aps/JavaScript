const getTodos = async () => {
  const response = await fetch("todos/gupta.json");
  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));

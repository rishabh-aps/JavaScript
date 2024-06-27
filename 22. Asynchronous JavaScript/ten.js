const getTodos = async () => {
  const response = await fetch("todos/gupta.json");
  const data = await response.json();
  return data;
};

console.log(1);
getTodos().then((data) => console.log(data));
console.log(2);

const users = [
  {
    firstName: "Rishabh",
    lastName: "Shukla",
    age: 19,
  },
  {
    firstName: "Pankaj",
    lastName: "Shukla",
    age: 20,
  },
  {
    firstName: "Shivang",
    lastName: "Shukla",
    age: 100,
  },
  {
    firstName: "Chandan",
    lastName: "Shukla",
    age: 100,
  },
  {
    firstName: "Chandan Prakash",
    lastName: "Shukla",
    age: 50,
  },
  {
    firstName: "Sharmila",
    lastName: "Shukla",
    age: 50,
  },
];

/* List of All the people with age < 30 */
const peopleWithAgeLessThanThirty = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(peopleWithAgeLessThanThirty);

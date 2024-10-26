// 7.1 (2p) Skriv klart funktionen updatePeople
// som lägger till en property:
// adult: true
// om personen i arrayen är 18 år eller över annars
// en property:
// adult: false
// funktionen ska returnera den uppdaterade arrayen.
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 35 },
  { name: "Fred", age: 19 },
  { name: "Alice", age: 6 },
];

function updatePeople(arr) {
  return arr.map((el) => ({
    ...el,
    adult: el.age > 18,
  }));
}

console.log(updatePeople(people));

// 7.2 (2p) Skriv en funktion med arrayen people som input som
// returnerar en array med bara vuxna. Alltså age minst 18 år.
function filterAdults(arr) {
  return arr.filter((el) => el.age > 18);
}

console.log(filterAdults(people));

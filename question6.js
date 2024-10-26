// 8. (2p) Skriv klart funktionen pizzaPrice som tar en pizza-sort
// som input och returnerar priset.
// Pizza-sorterna är begränsade till följande pizzor:
// "hawaii", "peperoni" och "vegetarian"
// En "hawaii" kostar 80 kr
// En "peperoni" kostar 90 kr
// En "vegetarian" kostar 85 kr

function pizzaPrice(pizza) {
  switch (pizza) {
    case "hawaii":
      return 80;
    case "peperoni":
      return 90;
    case "vegetarian":
      return 85;
    default:
      return "Pizza unavailable";
  }
}

console.log(pizzaPrice("hawaii"));
console.log(pizzaPrice("peperoni"));
console.log(pizzaPrice("vegetarian"));
console.log(pizzaPrice("kebab"));

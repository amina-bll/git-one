let arr = ["element1", "element2", "element3"];
let dict = { key1: "value1", key2: "value2" };
let isTrue = true;

console.log(arr[2]);
console.log(dict.key1);
console.log(dict["key2"]);

function myFunction(variable) {
  switch (variable) {
    case 0:
      day = "samedi";
      break;

    case 1:
      day = "dimanche";
      break;

    case 2:
      day = "lundi";
      break;

    case 3:
      day = "mardi";
      break;

    case 4:
      day = "mercredi";
      break;

    case 5:
      day = "jeudi";
      break;

    case 6:
      day = "vendredi";
      break;

    default:
      day = "chosir entre 0 et 6 !!!!";
      break;
  }
  return day;
}

console.log(myFunction(10));

let monTableau = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;
let sum = 0;
for (i in monTableau) {
  sum = sum + monTableau[i];
}

console.log(sum);

let countries = ["France", "Allemagne", "Belgique", "Espagne", "Italy"];
let capital = ["Paris", "Berlin", "Bruxelles", "Madrid", "Rome"];

function CountryAndCapital() {
  for (let i = 0; i < capital.length; i++){
    console.log( countries[i] + " a pour capitale " + capital[i]);
}
}

(CountryAndCapital())
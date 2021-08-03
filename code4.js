const arr = [
  25,
  "apple",
  "banana",
  ["apple", "strawberry", "apple", 25, 27, null, ["apple", 25, "apple"]],
  ["apple", 25],
];

const item = "apple";

const outputElement = document.querySelector("#answer");

outputElement.innerHTML = `Array is: <br>
                            ${arr}, <br>
                            item is ${item}.<br>
                            Included in array ${numberOfItems(arr, item)} times`;

function numberOfItems(array, item) {
  let counter = 0;

  array.forEach((element) => {
    if (element === item) {
      counter++;
      return;
    }

    if (Array.isArray(element)) {
      counter += numberOfItems(element, item);
    }
  });

  return counter;
}

let array = [10, 20, 30, 40, 50];

let element = 60;
found = 0;
for (var i = 0; i < array.length; i++) {
  if (array[i] === element) {
    console.log("Element Found");
    found = 1;
    break;
  }
}

if (!found) {
  console.log("Element not Found!");
}

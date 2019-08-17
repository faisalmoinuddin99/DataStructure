let array = [1, 5, 8, 10, 13, 16, 20, 30, 40, 50, 67];

let low = 0;
let high = array.length - 1;
key = 20;
found = 0;
while (low <= high) {
  mid = Math.floor((low + high) / 2);
  if (key === array[mid]) {
    console.log(`Element found at positon ${mid}`);
    found = 1;
    break;
  } else if (key > array[mid]) {
    low = mid + 1;
  } else if (key < array[mid]) {
    high = mid - 1;
  }
}
if (!found) {
  console.log("Element not Present.");
}

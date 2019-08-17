let array = [37, 10, 50, 8, 30];

let n = array.length;
bubbleSort(array, n);
for (let i = 0; i <= n - 1; i++) console.log(array[i]);

function bubbleSort(array, n) {
  let flag = 0;
  for (let round = 1; round <= n - 1; round++) {
    for (let i = 0; i <= n - 1 - round; i++) {
      if (array[i] > array[i + 1]) {
        flag = 1;
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
      if (flag == 0) {
        console.log(`Rounds = ${round}`);

        return;
      }
    }
  }
}

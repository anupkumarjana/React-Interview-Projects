function map(array, callback) {
  const mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    mappedArray.push(callback(array[i]));
  }
  return mappedArray;
}

const mappedArray = map([1, 2, 3, 4, 5], (x) => x * 2);
console.log(mappedArray);
// Output: [2, 4, 6, 8, 10]

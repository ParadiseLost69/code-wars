function sumArray(array) {
  if (!array || array.length < 3) {
    return 0;
  }
  //find the max and min numbers
  let maxNum = Math.max(...array);
  let minNum = Math.min(...array);

  console.log(`MIN: ${minNum}`);

  //find the indexes of those numbers and splice them from the array --not ideal
  const maxNumberIndex = array.findIndex((num) => {
    return num === maxNum;
  });
  array.splice(maxNumberIndex, 1);
  const minNumberIndex = array.findIndex((num) => num === minNum);
  array.splice(minNumberIndex, 1);

  //Sum the array

  const summedArray = array.reduce((prev, cur) => prev + cur, 0);

  return summedArray;
}

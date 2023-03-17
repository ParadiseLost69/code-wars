function sortArray(array) {
  let oddsArray = [];
  let evensArray = [];
  const sortedArray = [...array].sort((a, b) => a - b);

  array.map((num, ind) => {
    if (num % 2) {
      //odd numbers
      oddsArray.push(num);
    } else {
      //even numbers
      evensArray.push([num, ind]);
    }
  });

  oddsArray.sort((a, b) => a - b);
  evensArray.map((numArr) => {
    oddsArray.splice(numArr[1], 0, numArr[0]);
  });

  // Return a sorted array.
  return oddsArray;
}

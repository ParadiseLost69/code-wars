function removeSmallest(numbers) {
  if (numbers.length === 0 || numbers.length === 1) {
    return [];
  }

  let newArr = [];

  let minNum = Math.min(...numbers);
  for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] === minNum) {
      minNum = "a";
      continue;
    } else {
      newArr.push(numbers[i]);
    }
  }

  return newArr;
}

function sumTwoSmallestNumbers(numbers) {
  //returns sum of two lowest positive numbers

  const lowest = Math.min(...numbers);
  const lowestIndex = numbers.indexOf(lowest);
  numbers.splice(lowestIndex, 1);

  const secondLowest = Math.min(...numbers);
  const secondLowestInd = numbers.indexOf(secondLowest);

  return lowest + secondLowest;
}

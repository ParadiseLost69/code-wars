function order(words) {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //if string is empty return ""
  if (words.length < 1) {
    return "";
  }

  //break each word into an array

  let wordArray = words.split(" ");

  let orderedArray = numbers.map((num) => {
    return wordArray.map((word) => {
      if (word.includes(num)) {
        return word;
      }
      return false;
    });
  });

  let wordie = [];
  let filteredArray = orderedArray.map((array) => {
    return array.filter((item) => item);
  });

  filteredArray.forEach((item) => {
    wordie.push(item[0]);
  });

  return wordie.join(" ").trim();
}

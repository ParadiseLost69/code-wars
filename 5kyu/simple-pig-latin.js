function pigIt(str) {
  //Code here
  const split = str.split(" ");
  let wordArray = [];

  split.map((word) => {
    if (word === "!" || word === "?") {
      wordArray.push(word);
      return;
    }
    let beginning = word.slice(1);
    let end = word[0];
    wordArray.push(beginning + end + "ay");
  });

  return wordArray.join(" ");
}

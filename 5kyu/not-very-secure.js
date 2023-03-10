function alphanumeric(string) {
  const split = string.split("");
  if (string.length === 0) {
    return false;
  }
  const checkArray = split.map((letter) => {
    let ascii = letter.charCodeAt();
    if (ascii >= 48 && ascii <= 57) {
      return true;
    }
    if (ascii >= 65 && ascii <= 90) {
      return true;
    }
    if (ascii >= 97 && ascii <= 122) {
      return true;
    } else {
      return false;
    }
  });

  return checkArray.includes(false) ? false : true;
  //your code here
}

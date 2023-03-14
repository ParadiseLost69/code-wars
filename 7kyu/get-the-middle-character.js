function getMiddle(s) {
  let arr = Array.from(s);

  if (arr.length === 1) {
    return s;
  }

  if (arr.length % 2 === 0) {
    const half = arr.length / 2 - 1;
    const spliced = arr.splice(half, 2);
    return spliced.join("");
  }

  const half = Math.floor(s.length / 2);
  const spliced = arr.splice(half, 1);
  return spliced.join("");
}

String.prototype.toAlternatingCase = function () {
  let results = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i] === this[i].toLowerCase()) {
      let word = this[i].toUpperCase();
      results.push(word);
    } else if (this[i] === this[i].toUpperCase()) {
      let wa = this[i].toLowerCase();
      results.push(wa);
    }
  }
  return results.join("");
};

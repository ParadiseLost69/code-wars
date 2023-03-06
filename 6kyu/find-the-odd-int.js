function findOdd(A) {
  //happy coding!
  const occ = A.reduce((acc, cur) => {
    return acc[cur] ? ++acc[cur] : (acc[cur] = 1), acc;
  }, {});

  const objectKeys = Object.keys(occ);

  const oddNumbers = objectKeys.map((key) => {
    if (occ[key] % 2 === 0) {
      return;
    }
    return key;
  });
  const Numbers = oddNumbers.map((num) => {
    if (num) {
      return num * 1;
    }
  });

  return Numbers.find((el) => typeof el === "number");
}

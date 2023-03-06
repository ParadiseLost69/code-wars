function isValidWalk(walk) {
  if (walk.length === 10) {
    //account for north and south movements
    let verticalCount = 0;
    let horizontalCount = 0;

    walk.forEach((direction) => {
      if (direction === "n") {
        verticalCount++;
      }
      if (direction === "s") {
        verticalCount--;
      }
      if (direction === "e") {
        horizontalCount++;
      }
      if (direction === "w") {
        horizontalCount--;
      }
    });
    return horizontalCount === 0 && verticalCount === 0;
  }
  return false;
}

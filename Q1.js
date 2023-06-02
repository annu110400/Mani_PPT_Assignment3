function findClosestThreeSum(arr, goal) {
  arr.sort((x, y) => x - y);
  let nearestSum = Infinity;

  for (let idx = 0; idx < arr.length - 2; idx++) {
    let start = idx + 1;
    let end = arr.length - 1;

    while (start < end) {
      const currentTotal = arr[idx] + arr[start] + arr[end];

      if (Math.abs(goal - currentTotal) < Math.abs(goal - nearestSum)) {
        nearestSum = currentTotal;
      }

      if (currentTotal < goal) {
        start++;
      } else if (currentTotal > goal) {
        end--;
      } else {
        return currentTotal;
      }
    }
  }

  return nearestSum;
}
const arr = [-1,2,1,-4], goal = 1;
console.log(findClosestThreeSum(arr, goal));
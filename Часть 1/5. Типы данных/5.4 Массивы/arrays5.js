function getMaxSubSum(arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let startSum = 0;
    for (let j = i; j < arr.length; j++) {
      startSum += arr[j];
      maxSum = Math.max(maxSum, startSum);
    }
  }

  return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100

function sumNumbers(nums) {
  if (!nums.length) return 0;

  let total = nums[0];
  for (let i = 1; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

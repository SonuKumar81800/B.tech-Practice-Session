function countBST(n) {
  let k = n;
  n = 2 * n;
  let res = 1;
  for (let i = 0; i < k; ++i) {
    res *= (n - i) / (i + 1);
  }
  return res / (k + 1);
}

console.log(countBST(5));

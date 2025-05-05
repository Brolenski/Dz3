function recursiveSum(n) {
  if (n === 0) return 0;
  if (n > 0) return n + recursiveSum(n - 1);
  return n + recursiveSum(n + 1);
}

function calculateSum(num) {
  if (isNaN(num)) {
    return "Будь ласка, введіть ціле число.";
  }

  const sum = recursiveSum(num);
  return `Сума дорівнює ${sum}`;
}
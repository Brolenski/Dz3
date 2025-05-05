function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

function checkPrime(num) {
  if (isNaN(num)) {
    return "Будь ласка, введіть ціле число.";
  }

  if (isPrime(num)) {
    return `${num} — просте число.`;
  } else {
    return `${num} — не є простим числом.`;
  }
}
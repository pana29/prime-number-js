const isPrime = (n) => {
  if (n < 2) {
    return `${n} this is a prime number`;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return `${n} this in not a prime number`;
    }
  }
  return `${n} this is a prime number`;
};
console.log(isPrime(2));

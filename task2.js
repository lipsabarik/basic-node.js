

let a = [19, 17, 16, 14, 2222, 21];

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i=0;i<a.length;i++){
    console.log(isPrime(a[i]));
}





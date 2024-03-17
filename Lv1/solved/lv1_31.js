//프로그래머스 lv1 소수 찾기
function solution(n) {
	const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false; // 0은 소수가 아닙니다.
  isPrime[1] = false; // 1은 소수가 아닙니다.

  const primes = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);

      // i의 배수를 모두 소수가 아니라고 표시합니다.
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return primes.length;
}
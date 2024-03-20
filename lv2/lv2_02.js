// 프로그래머스 lv2 N개의 최소공배수 

function gcd(a, b) {
  while (b !== 0) {
      let t = b;
      b = a % b;
      a = t;
  }
  return a;
}

function lcm(a, b) {
  return a * b / gcd(a, b);
}

// 0번 부터 마지막 숫자까지 계속 둘의 최소공배수를 갱신하며 반복
function solution(arr) {
  let result = arr[0];
  for (let i=1; i<arr.length; i++){
    result = lcm(result, arr[i]);
  }
  return result;
}


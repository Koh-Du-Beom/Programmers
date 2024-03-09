// 프로그래머스 레벨 1 두 정수 사이의 합

function solution (a, b){
  const counts = Math.abs(b - a) + 1;
  return counts * (b + a) / 2;
}

console.log(solution(3, 3));
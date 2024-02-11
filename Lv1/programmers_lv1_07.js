//3진법 뒤집기
function solution(n){
  let numbers = [];
  while(n > 0){
    const remainder = n % 3;
    numbers.push(remainder);
    n = Math.floor(n / 3);
  }
  const joinedNumbers = numbers.join('');
  return parseInt(joinedNumbers, 3);
  
}

console.log(solution(125));

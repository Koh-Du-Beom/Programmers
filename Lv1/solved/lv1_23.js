//프로그래머스 lv1 없는 숫자 더하기
function solution(numbers) {
	let sum = 0;
	for(let i=1; i<=9; i++){
		numbers.find((item) => item === i) ? null : sum += i;
	}
	return sum;
}
//프로그래머스 lv1 약수의 개수와 덧셈

function solution(left, right) {
	//약수의 개수가 홀수개이려면 제곱수여야함.
	let sum = (right - left + 1) * (right + left) / 2;
	for (let i=left; i<=right; i++){
		if (Number.isInteger(Math.sqrt(i))){
			sum -= 2 * i;
		}
	}
	return sum;
}
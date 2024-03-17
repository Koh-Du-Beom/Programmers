//프로그래머스 lv1 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
	const result = [];
	for (item of arr){
		if (item % divisor === 0){ result.push(item) }
	}
	result.sort((a, b) => a - b);
	return result.length? result : [-1];
}
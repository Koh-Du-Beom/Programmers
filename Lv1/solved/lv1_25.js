//프로그래머스 lv1 제일 작은 수 제거하기

function solution(arr) {
	const min = Math.min(...arr);
	const newArr = arr.filter(item => item !== min);

	return newArr.length ? newArr : [-1];
}
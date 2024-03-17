//프로그래머스 lv1 평균 구하기

function solution(arr) {
	return arr.reduce((acc, cur) => (acc + cur) / arr.length, 0);
}
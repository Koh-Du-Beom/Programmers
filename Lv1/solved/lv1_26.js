//프로그래머스 lv1 정수 제곱근 판별

function solution(n) {
	const sqroot = Math.sqrt(n);
	return Number.isInteger(sqroot) ? (sqroot + 1)**2 : -1;
}
// 프로그래머스 lv1 수박수박수박수박수박수?

function solution(n) {
	const divisor = n / 2;
	const remainder = n % 2;

	if (n === 1){ return '수'}
	else{ return remainder ? '수박'.repeat(divisor) + '수' : '수박'.repeat(divisor) }
}
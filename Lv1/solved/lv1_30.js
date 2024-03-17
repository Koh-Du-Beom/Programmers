//프로그래머스 lv1 정수 내림차순으로 배치하기

function solution(n){
	let arr =n.toString().split('');
	let result = arr.sort((a, b) => b - a).join('');
	return Number(result);
}
//프로그래머스 lv1 자릿수 더하기
function solution(n){
	return n.toString().split('').reduce((acc, cur) => Number(acc) + Number(cur), 0);
}
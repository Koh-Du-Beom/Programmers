//프로그래머스 lv1 자연수 뒤집어 배열로 만들기

function solution(n) {
	return n.toString().split('').map(item => Number(item)).reverse();
}


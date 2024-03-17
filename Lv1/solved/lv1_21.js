//프로그래머스 lv1 음양 더하기

function solution(absolutes, signs) {
	let sum = 0;
	absolutes.forEach((item, index)=>{
		signs[index] ? sum += item : sum -= item
	})
	return sum;
}
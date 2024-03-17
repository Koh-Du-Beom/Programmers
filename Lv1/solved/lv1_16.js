// 프로그래머스 lv1 콜라 문제
function solution(a, b, n) {
	let full= 0 , empty = 0, total = 0;
	let result = 0; // 콜라 먹은 총 갯수
	while(true){
		if(n < a){ break; }
		full = Math.floor(n / a) * b;
		empty = (n % a);
		total = full + empty;
		n = total; 
		result += full;
	}
	
	return result;
}

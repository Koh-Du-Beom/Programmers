//프로그래머스 lv2 두 원 사이의 정수 쌍
function solution(r1, r2) {
	let result = 0;
	for (let i = 0; i<=r1; i++){
		for (let j = 0; j<=r2;){
			if (i**2 + j**2 <= r2**2){
				result += 2;
			}
		}
	}
	return result;
}
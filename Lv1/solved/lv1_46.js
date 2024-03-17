//프로그래머스 lv1 두 개 뽑아서 더하기
function solution(numbers) {
	const result = new Set();
	for (let i=0; i<numbers.length-1; i++){
		for (let j=i+1; j<numbers.length; j++){
			result.add(numbers[i] + numbers[j]);
		}
	}
	return [...result].sort((a, b) => a - b);
}

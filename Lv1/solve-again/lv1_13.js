//프로그래머스 lv1 숫자 짝꿍
function solution(X, Y) {
	const frequencyX = new Array(10).fill(0); // X의 각 숫자 빈도수를 저장할 배열
	const frequencyY = new Array(10).fill(0); // Y의 각 숫자 빈도수를 저장할 배열

	// X와 Y의 각 숫자 빈도수 계산
	for (let digit of X) frequencyX[digit]++;
	for (let digit of Y) frequencyY[digit]++;

	let result = '';
	// 공통된 숫자를 사용하여 결과 문자열 구성
	for (let i = 9; i >= 0; i--) { // 가장 큰 수를 만들기 위해 9부터 시작
		const commonFrequency = Math.min(frequencyX[i], frequencyY[i]);
		result += i.toString().repeat(commonFrequency);
	}

	if (result.length === 0) return "-1"; // 공통된 숫자가 없는 경우
	if (result[0] === '0') return "0"; // 결과가 0으로만 구성된 경우

	return result;
}

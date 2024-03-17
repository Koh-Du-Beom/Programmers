//프로그래머스 lv1 문자열 다루기 기본 

function solution(s) {
	const strArr = s.split('');
	if (strArr.length !== 4 && strArr.length !== 6){
		return false;
	}

	return s.split('').every(c => !isNaN(c) && !isNaN(parseFloat(c)));
}
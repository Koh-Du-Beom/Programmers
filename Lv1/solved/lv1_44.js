//프로그래머스 lv1 이상한 문자 만들기

function solution(s) {
	const splitedStrs = s.split(' ');
	const result = [];
	for (str of splitedStrs){
		result.push(str.split('').map((item, index) => index % 2 === 0 ? item.toUpperCase() : item.toLowerCase()).join(''));
	}
	return result.join(' ');
}


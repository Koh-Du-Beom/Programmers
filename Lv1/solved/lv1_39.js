// 프로그래머스 lv1 문자열 내림차순으로 배치하기
function solution(s) {
  return s.split('').sort((a, b) => {
		return a > b ? -1 : 1; 
	}).join('');
}

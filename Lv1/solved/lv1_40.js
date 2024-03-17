// 프로그래머스 lv1 서울에서 김서방 찾기
function solution(s) {
  const index = s.findIndex((item) => item === 'Kim');
	return `김서방은 ${index}에 있다`;
}

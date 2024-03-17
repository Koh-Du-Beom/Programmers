//프로그래머스 lv1 핸드폰 번호 가리기
function solution(phone_number){
	const maskedPartLength = phone_number.length - 4;
	return '*'.repeat(maskedPartLength) + phone_number.substring(maskedPartLength);
}
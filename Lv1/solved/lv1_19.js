//나머지가 1이 되는 수 찾기
function solution(number) {
	let num = 0;
	while(true){
		if(number % num === 1){
			return num;
		}
		num += 1;
	}
}
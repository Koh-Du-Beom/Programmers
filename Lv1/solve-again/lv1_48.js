// 프로그래머스 lv1 완주하지 못한 선수
function solution(participant, completion) {
	const frequency = {};

	participant.forEach((name) => {
		if (frequency[name]){
			frequency[name] += 1;
		}else{
			frequency[name] = 1;
		}
	})

	completion.forEach((name) => {
		frequency[name] -= 1;
	})


	for(let name in frequency){
		if (frequency[name] > 0 ){
			return name;
		}
	}
	
}

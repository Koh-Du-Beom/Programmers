// 프로그래머스 lv1 완주하지 못한 선수
function solution(participant, completion) {
	const result = participant.filter((item, index) => {	
		return item !== completion.find((comp) => item === comp);
	})

	console.log(result);
	return result;
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
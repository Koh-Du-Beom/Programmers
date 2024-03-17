//프로그래머스 lv1 푸드 파이트 대회
function solution(food){
	const amounts = food.map(item => parseInt(item / 2));
	const result = [];
	for (let i=0; i<amounts.length; i++){
		result.push(i.toString().repeat(amounts[i]));
	}
	console.log(result.join(''));
}

console.log(solution([1, 7, 1, 2]));
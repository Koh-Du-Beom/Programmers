// 프로그래머스 lv1 카드 뭉치 
function solution(cards1, cards2, goal) {
	let i = 0; // i, j는 각각 검사하는 인덱스를 관리하기위함
	let j = 0;
	let result = 'Yes';
	for(g of goal){
		if (cards1[i] === g){
			i += 1;
		}else if (cards2[j] === g){
			j += 1;
		}else{
			result = 'No'; 
		}
	}
	return result;
}

solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]);

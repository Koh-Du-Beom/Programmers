//프로그래머스 lv1 가장 가까운 같은 글자

function solution(s) {
	let table = {};
	let result = []; //결과를 담는 배열
	const string = s.split('');
	string.forEach((item, index) => {
		
		if (item in table){
			console.log('if문실행');
			result[index] = index - table[item] 
			table[item] = index;
		}else{
			result[index] = -1;
			table[item] = index;
		}


		//간소화
		const hash = {};
		return [...s].map((item, index) => {
			let result = hash[item] !== undefined ? i - hash[item] : -1;
			hash[item] = index;
			return result;
		})

	})
	return result;
}
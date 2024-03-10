//프로그래머스 lv1 햄버거 만들기
//배열의 내용이 같아도 Javascript에서 참조비교를 수행하기 때문에 같은 주소를 
//가리키고 있어야만 true로 평가되므로, toString을 통해 비교하는것이 부적절
function solution(ingredient) {
	let hamburgers = 0;
	let stack = [];

	ingredient.forEach(item => {
		stack.push(item);

		if (stack.length >= 4){
			let copiedStack = stack.slice(-4);
			if (copiedStack.join('') === '1231'){
				stack.splice(-4);
				hamburgers += 1;
			}
		}
	})
	return hamburgers;

}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));

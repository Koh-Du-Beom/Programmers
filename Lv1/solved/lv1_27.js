//프로그래머스 lv1 같은 숫자는 싫어
function solution(arr){
	let stack = [];
	arr.forEach((item, index) => {
		if (index === 0 || stack[stack.length - 1] !== item) {
			stack.push(item);
		}
	})
	return stack;
}
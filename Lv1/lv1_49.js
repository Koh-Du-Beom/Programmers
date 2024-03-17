//프로그래머스 lv1 k번째 수 

function solution(array, commands) {

	const result = [];
	for(cmd of commands){
		let tmpArr = array.slice(cmd[0]-1, cmd[1]).sort();
		result.push(tmpArr[cmd[2]-1]);
	}
	console.log(result);
	return result;
}
// 프로그래머스 lv1 폰켓몬 
function solution(nums){
	const selection = nums.length / 2; 
	const maxTypes = new Set(nums).size;

	return Math.min(maxTypes, selection);
}

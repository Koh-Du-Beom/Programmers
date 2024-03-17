//프로그래머스 lv1 카카오인턴십 키패드누르기 

function solution(numbers, hand) {
	
	
	let keyPad = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		['L', 0, 'R'],
	]

	let currentFinger = {
		'L' : { row : 3, col : 0},
		'R' : { row : 3, col : 2},
	}

	let result = []; // 결과를 담을 배열. 나중에 join으로 리턴해주면 될듯.

	for (number of numbers){
		//무조건 왼손으로만 눌러야되는 경우
		if (number === 1){ currentFinger.L.row = 0; currentFinger.L.col = 0; result.push('L'); }
		if (number === 4){ currentFinger.L.row = 1; currentFinger.L.col = 0; result.push('L'); }
		if (number === 7){ currentFinger.L.row = 2; currentFinger.L.col = 0; result.push('L'); }
		
		//무조건 오른손으로만 눌러야되는 경우
		if (number === 3){ currentFinger.R.row = 0; currentFinger.R.col = 0; result.push('R'); }
		if (number === 6){ currentFinger.R.row = 1; currentFinger.R.col = 0; result.push('R'); }
		if (number === 9){ currentFinger.R.row = 2; currentFinger.R.col = 0; result.push('R'); }
		
		//가운데 있는 경우
		if (number === 2){
			const leftDist = Math.abs(currentFinger.L.row - 0) + Math.abs(currentFinger.L.col - 1);
			const rightDist = Math.abs(currentFinger.R.row - 0) + Math.abs(currentFinger.R.col - 1);

			if(leftDist === rightDist){
				if (hand === 'left'){ currentFinger.L.row = 0; currentFinger.L.col = 1; result.push('L'); }
				else{ currentFinger.R.row = 0; currentFinger.R.col = 1; result.push('R'); }
			}else if (leftDist < rightDist){
				currentFinger.L.row = 0; currentFinger.L.col = 1; result.push('L');
			}else if (leftDist > rightDist){
				currentFinger.R.row = 0; currentFinger.R.col = 1; result.push('R');
			}
		}

		if (number === 5){
			const leftDist = Math.abs(currentFinger.L.row - 1) + Math.abs(currentFinger.L.col - 1);
			const rightDist = Math.abs(currentFinger.R.row - 1) + Math.abs(currentFinger.R.col - 1);

			if(leftDist === rightDist){
				if (hand === 'left'){ currentFinger.L.row = 1; currentFinger.L.col = 1; result.push('L'); }
				else{ currentFinger.R.row = 1; currentFinger.R.col = 1; result.push('R'); }
			}else if (leftDist < rightDist){
				currentFinger.L.row = 1; currentFinger.L.col = 1; result.push('L');
			}else if (leftDist > rightDist){
				currentFinger.R.row = 1; currentFinger.R.col = 1; result.push('R');
			}
		}

		if (number === 8){
			const leftDist = Math.abs(currentFinger.L.row - 2) + Math.abs(currentFinger.L.col - 1);
			const rightDist = Math.abs(currentFinger.R.row - 2) + Math.abs(currentFinger.R.col - 1);

			if(leftDist === rightDist){
				if (hand === 'left'){ currentFinger.L.row = 2; currentFinger.L.col = 1; result.push('L'); }
				else{ currentFinger.R.row = 2; currentFinger.R.col = 1; result.push('R'); }
			}else if (leftDist < rightDist){
				currentFinger.L.row = 2; currentFinger.L.col = 1; result.push('L');
			}else if (leftDist > rightDist){
				currentFinger.R.row = 2; currentFinger.R.col = 1; result.push('R');
			}
		}

		if (number === 0){
			const leftDist = Math.abs(currentFinger.L.row - 3) + Math.abs(currentFinger.L.col - 1);
			const rightDist = Math.abs(currentFinger.R.row - 3) + Math.abs(currentFinger.R.col - 1);

			if(leftDist === rightDist){
				if (hand === 'left'){ currentFinger.L.row = 3; currentFinger.L.col = 1; result.push('L'); }
				else{ currentFinger.R.row = 3; currentFinger.R.col = 1; result.push('R'); }
			}else if (leftDist < rightDist){
				currentFinger.L.row = 3; currentFinger.L.col = 1; result.push('L');
			}else if (leftDist > rightDist){
				currentFinger.R.row = 3; currentFinger.R.col = 1; result.push('R');
			}
		}
	}

	return result.join('');
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
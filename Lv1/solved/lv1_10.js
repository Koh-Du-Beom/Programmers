function solution(matrixA, matrixB) {

	let resultMatrix = [];
	for (let i = 0; i < matrixA.length; i++) {
			let row = [];
			for (let j = 0; j < matrixA[i].length; j++) {
					row.push(matrixA[i][j] + matrixB[i][j]);
			}
			resultMatrix.push(row);
	}
	return resultMatrix;
}
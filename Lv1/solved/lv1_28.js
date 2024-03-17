//프로그래머스 lv1 최대공약수와 최대공배수 

function gcd(a, b) {
	while (b !== 0) {
			let t = b;
			b = a % b;
			a = t;
	}
	return a;
}

function lcm(a, b) {
	return a * b / gcd(a, b);
}

function solution(n, m) {
	let result = [];
	result.push(gcd(n, m)); result.push(lcm(n, m));
	return result;
}
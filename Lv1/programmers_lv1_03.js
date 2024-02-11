//프로그래머스 lv1 달리기 경주
// 내 풀이
// function solution(players, callings){
//   for (let calling of callings){
//     const index = players.indexOf(calling);
//     [players[index - 1], players[index]] = [players[index], players[index - 1]]  
//   }

//   return players;
// }

// solution(['mumu', 'soe', 'poe', 'kali', 'mine'], ['kali', 'kali', 'mine', 'mine']);

//위 코드는 indexOf로 각 호출에 대한 선수의 인덱스를 찾는 과정에서 비효율 발생
// 선수배열의 크기가 n 호출의 크기가 m일때, n,m이 커지면 시간초과 발생

function solution(players, callings) {
  //선수 이름과 인덱스 매핑하는 객체 생성
  let playerIndices = {};
  for (let i = 0; i < players.length; i++) {
    playerIndices[players[i]] = i;
  }

  for (let calling of callings) {
    const index = playerIndices[calling];
    if (index > 0) {
      [players[index], players[index - 1]] = [players[index - 1], players[index]];
      // 인덱스 매핑 업데이트
      playerIndices[players[index]] = index;
      playerIndices[players[index - 1]] = index - 1;
    }
  }

  return players;
}

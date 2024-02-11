//프로그래머스 lv1 문자열 내 p와 y의 개수
function solution(s){
  var answer = true;

  const newString = s.toLowerCase();
  let countP = 0;
  let countY = 0;

  for (const newS of newString){
    switch (newS){
      case 'p' :
        countP += 1;
        break;
      case 'y' :
        countY += 1;
        break;
      default:
        break;
    }
  }
  if (countP !== countY){
    answer = false;
  }

  return answer;
}

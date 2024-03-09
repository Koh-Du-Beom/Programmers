// 프로그래머스 lv 1 문자열 내 마음대로 정렬하기

function solution(strings, n){

  var answer = [];
  strings.sort((str1, str2)=>{
    let nthStr1 = str1[n].toLowerCase();
    let nthStr2 = str2[n].toLowerCase();
    if (nthStr1 > nthStr2){
      return 1;
    }else if (nthStr1 < nthStr2){
      return -1;
    }else{
      if (str1 > str2)
      {
        return 1;
      }else{
        return -1;
      }
    }
  })

  console.log(strings);
  return strings;
}

solution(['sun', 'bed', 'car'], 1);
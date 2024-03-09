//프로그래머스 lv1 추억 점수

function solution(name, yearning, photos){
  let pointTable = [];

  for (let i = 0; i<name.length; i++){
    pointTable.push({name : name[i], yearning : yearning[i]});
  }

  var answer = [];

  for (let photo of photos){
    const index = photos.indexOf(photo);
    answer[index] = 0;
    for (let name of photo){
      const point = pointTable.find(object => object.name === name);
      if(point){
        answer[index] += point.yearning;
      }
    }
  }
  console.log(answer);
  return answer;
}

solution(['may', 'kein', 'kain', 'radi'], [5, 10, 1, 3], [['may', 'kein','kain', 'radi'], ['may', 'kein', 'brin', 'deny'], ['kon', 'kain','may', 'coni']]);
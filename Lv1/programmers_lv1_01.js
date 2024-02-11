//프로그래머스 lv1 가장 많이 받은 선물

function solution(friends, gift){
  //선물 교환횟수 계산하는거 다시 짜기
  
  // 선물 지수 계산
  const giftRates = [];
  const giftRecords = []; 
  for(let i=0; i<friends.length; i++){
    giftRates.push({friend : friends[i], get : 0, give : 0, point : 0});
  }

  for (let i=0; i<gift.length; i++){
    const giver = gift[i].split(" ")[0];
    const getter = gift[i].split(" ")[1];
    giftRates.find(tableElement => tableElement.friend === giver).give += 1;
    giftRates.find(tableElement => tableElement.friend === getter).get += 1;
  }
  
  for (let giftRate of giftRates){
    giftRate.point = giftRate.give - giftRate.get;
  }

  console.log(giftRates);

}

solution(['muzi', 'prodo', 'ryan', 'neo'], ['muzi prodo', 'muzi prodo', 'ryan muzi', 'ryan muzi', 'ryan muzi', 'prodo muzi', 'prodo ryan', 'neo muzi']);
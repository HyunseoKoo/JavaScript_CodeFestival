/* 26. 행성 문제2
우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.
*/

function planet(a) {
  if ((a = '수성')) {
    console.log('Mercury');
  } else if ((a = '금성')) {
    console.log('Venus');
  } else if ((a = '지구')) {
    console.log('Earth');
  } else if ((a = '화성')) {
    console.log('Mars');
  } else if ((a = '목성')) {
    console.log('Jupiter');
  } else if ((a = '토성')) {
    console.log('Saturn');
  } else if ((a = '천왕성')) {
    console.log('Uranus');
  } else if ((a = '해왕성')) {
    console.log('Neptune');
  }
}

planet('지구');

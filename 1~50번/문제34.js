/* 34. sort 구현하기
민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다.
그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다.

민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
(키는 공백으로 구분하여 입력됩니다.)

*입출력*
입력: 176 156 155 165 166 169
출력: NO

입력: 155 156 165 166 169 176
출력: YES
*/

function input(a) {
  let origin = a.split(' ');
  let devide = a.split(' ');
  let devideSort = devide.sort();

  let result1 = [];
  for (i = 0; i < a.length; i++) {
    if (origin[i] == devideSort[i]) {
      result1.push('YES');
    } else {
      result1.push('NO');
    }
  }
  if (result1.includes('NO') == true) {
    return 'NO';
  } else {
    return 'Yes';
  }
}

console.log(input('176 156 155 165 166 169'));
console.log(input('155 156 165 166 169 176'));

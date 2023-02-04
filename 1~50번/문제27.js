/* 27. 객체 만들기
첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가
공백으로 구분되어 주어집니다.

두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

입력
Yujin Hyewon
70 100

출력
{ 'Yujin' : 70, 'Hyewon' : 100 }
*/

function Name(n) {
  const arr = n.split(' ');
  return arr;
}

const nameArr = Name('Yujin Hyewon');
const Yujin = String(nameArr[0]); // Yujin
const Hyewon = String(nameArr[1]); // Hyewon

function grade(b) {
  const arr2 = b.split(' ');
  return arr2;
}

const gradeArr = grade('70 100');
const YujinGrade = Number(gradeArr[0]);
const HyewonGrade = Number(gradeArr[1]);

function object() {
  const obj = { Yujin: YujinGrade, Hyewon: HyewonGrade };
  return obj;
}

console.log(object());

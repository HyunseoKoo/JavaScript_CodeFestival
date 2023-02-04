/* 35. Factory 함수 사용하기
2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다.

<pass>에 코드를 작성하여 two함수를 완성하세요.

function one(n) {
    function two(){
        // pass
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

 console.log(a(10));
 console.log(b(10));
 console.log(c(10));
*/

function one(n) {
  function two() {
    console.log(n);
    if (n == 2) {
      return function a(e) {
        return e ** 2;
      };
    }

    if (n == 3) {
      function b(e) {
        return e ** 3;
      }
      return b();
    }

    if (n == 4) {
      function c(e) {
        return e ** 4;
      }
      return c();
    }

    // if (n == 4)
    //   return function c(e) {
    //     e ** 4;
    //   };

    // function c(e) {
    //   if (n != 4) return;
    //   if (n == 4) return e ** n;
    // }

    // if (n == 4) {
    //   return function c(e) {
    //     e ** n;
    //   };
    // }
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

// console.log(a);
console.log(a(10)); // 100
console.log(b(10)); // 1000
console.log(c(10)); // 10000

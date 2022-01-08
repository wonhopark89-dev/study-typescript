const apply1 = (f) => f(1);

const add2 = (a) => a + 2;

// apply1(add2) 의 의미는 (a => a + 2)(1);
console.log(`apply1(add2): ${apply1(add2)}`);

console.log(`apply1(a => a - 1): ${apply1((a) => a - 1)}`);

// times 함수는 f 라는 함수는 n 번 실행하는 함수
const times = (f, n) => {
    let i = -1;
    while (++i < n) {
        f(i);
    }
};

times(console.log, 3);

times((a) => console.log(a + 10), 3);

// addMaker 는 클로저를 만들어서 리턴하는 함수

const addMaker = (a) => (b) => a + b;

// a 가 10이라고 기억을 하고 있다. ( 확인해보기 )
// const addMaker = (a) => (b) => {
//     console.log(`a: ${a}, b: ${b}`);
//     return a + b;
// };

const add10 = addMaker(10);

console.log(`add10: ${add10}`);
console.log(`add10(5): ${add10(5)}`);
console.log(`add10(10): ${add10(10)}`);

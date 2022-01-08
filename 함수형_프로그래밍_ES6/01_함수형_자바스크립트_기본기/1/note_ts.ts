const a: number = 10;

const add10 = (a: number) => a + 10;

const r = add10(5);

console.log(`add10: ${add10}`);
console.log(`r: ${r}`);

const f1 = () => () => 1;
console.log(`f1(): ${f1()}`);

const f2 = f1();
console.log(`f2: ${f2}`);
console.log(`f2(): ${f2()}`);

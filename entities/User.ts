class User {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    printUserInfo() {
        console.log(`name : ${this.name}, age: ${this.age}`);
    }
}

export default User;

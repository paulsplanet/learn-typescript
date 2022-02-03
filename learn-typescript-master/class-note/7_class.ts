class Person {
    private name: string;   // private = will use name whinin the Person only
    public age: number;
    readonly log: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
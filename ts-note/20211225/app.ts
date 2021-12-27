// Object 类型

// declare function create(o: object | null): void;

// create({ prop: 0 }); // OK
// create(null); // OK

// create(42); // Error

// 类型断言
// let k: any = 'aa'
// let m = (<number>k)

// 
// let arr: ReadonlyArray<number> = [1, 2, 3]
// let t = [1, 2]
// t = arr

// interface SquareConfig {
//     color?: string;
//     [index: string]: string;
// }

// let t: SquareConfig = { color: 'a', name: '1' }

// class Animal {
//     name: string;
// }
// class Dog extends Animal {
//     breed: string;
// }

// // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//     [x: number]: Animal;
//     // [x: string]: Dog;
// }


// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick();
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("tick tock");
//     }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image1 implements SelectableControl {
    private state: string;
    select() { }
}

class Location {

}
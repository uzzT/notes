type twoStringProps = Record<'prop1' | 'prop2' | 'prop3', string>;

const t:twoStringProps = {prop1: 'a', prop2: 'b', prop3: ''}

function foo(): never {
  throw new Error('never');
}

let x: void = undefined


// 交叉类型
interface Part1 { a: string }
interface Part2 { b: number }

let obj: Part1 & Part2 = { a: 'a', b: 1 };

// 类型别名

type TypeAlias = string;

// interface 描述数组

interface ArrayLike<T> {
  [index: number]: T
}

let arr1: ArrayLike<number> = [1, 2, 3];

let arr2: ArrayLike<string> = ['a', 'b', 'c'];

// interface 描述索引类型
interface Dictionary {
  [index: string]: string
}

let arr3: Dictionary = {
  a: 'aa',
  b: 'string',
  c: 'string'
}

// 类

// class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   move(distance: number = 0) {
//     console.log(distance);
//     this.name = 'move';
//   }
// }

// class Dog extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
// }

// const dog = new Dog('dog');
// const dog1 = new Dog('dog1');

// dog.move(10);

// console.log(dog.name);
// console.log(dog1.name);

abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log('roaming the earth...');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Woof! Woof!');
  }
}

// const myDog = new Dog();
// myDog.makeSound();
// myDog.move();

// 函数泛型
function identify<T>(arg: T): T {
  return arg
}

let m = identify('hello')

// 接口泛型

interface Pair<T,U> {
  first: T;
  second: U;
}

let pair1: Pair<string, number> = {
  first: 'hello',
  second: 10
}

// 类泛型
class Container<T> {
  value: T;
  constructor(value: T){
    this.value = value;
  }
}

// 命名空间
namespace MyNS {
  export const var1 = 10;
  export function add(){}
}

let t1 = MyNS.var1;

console.log(t1);

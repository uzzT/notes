# 《现代 ts 高级教程》

## 基础

### 概述

1. TypeScript 3.0 引入了项目引用，这是一种新的架构工具，允许大型项目更容易地组织代码和依赖项

### 类型

1. number
2. string
3. boolean
4. Array

```typescript
let arr: number[] = [1, 2, 3];
let arr: Array<number> = [1, 2, 3];
```
5. Tuple

```typescript
let arr: [number, string] = [1, 'a'];
```
6. Enum
7. Null 和 Undefined
8. Any
9. Unknown
10. Never

never 类型表示的是那些永不存在的值的类型。例如，never类型是那些总是会抛出异常或者根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。

```typescript
function foo(): never {
  throw new Error('never');
}
```
11. void

非严格模式下只能将 null 和 undefined 赋值给 void 类型的变量，在严格模式下，undefined 也可以被赋值给 void 类型的变量

#### 联合类型（Union Types）

```typescript
let arr: number | string = 1;
```

#### 交叉类型（Intersection Types）

```typescript
let arr: number & string = 1;

interface Part1 { a: string }
interface Part2 { b: number }

let obj: Part1 & Part2 = { a: 'a', b: 1 };

```

#### 类型别名 (Type Aliases)

#### 字符串字面量类型 (String Literal Types)

### 函数

1. 函数声明
2. 函数表达式
3. 可选参数与默认参数
4. 剩余参数
5. 函数重载
6. this 和箭头函数

### 接口和类

#### 接口

1. 描述对象
2. 描述函数类型
3. 描述数组

```typescript
interface ArrayLike<T> {
  [index: number]: T
}

let arr: ArrayLike<number> = [1, 2, 3];
```
4. 描述索引类型

#### 类

1. 修饰符
2. extends
3. abstract class

### 枚举和泛型

#### 枚举

#### 泛型 (Generics)

1. 函数泛型
2. 接口泛型
3. 类泛型

### 命名空间和模块

1. 命名空间支持嵌套
2. 模块

#### 命名空间与模块的对比

1. 作用域 （命名空间是在全局作用域中定义的，模块是在自己的作用域）
2. 文件组织 (命名空间通常组织在同一文件，modules 通常会拆成多个文件)
3. 依赖管理 (命名空间没有依赖管理，模块可以依赖多个模块)
4. 使用场景 (现代 js 项目更倾向于使用模块，而不是命名空间)

### TODO

1. ts 2.1 映射类型
2. ts 3.0 项目引用
3. ts 高级类型
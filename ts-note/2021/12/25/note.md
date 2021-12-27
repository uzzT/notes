## 查漏补缺 

### public

在构造函数的参数上使用 `public` 等同于创建了同名的成员变量

### tuple

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同

```typescript
let tuple: [number, string] = [1, '2'] 
```

### void

声明一个 `void` 类型的变量没有什么大用，因为你只能为它赋予 `undefined` 和  `null`

```typescript
let t: void = undefined
```

### never

返回 `never` 的函数必须存在无法达到的终点

```typescript
function error(message: string): never {
    throw new Error(message);
}
```

### declare
`declare` 就是告诉 `TS` 编译器你担保这些变量和模块存在，并声明了相应类型，编译的时候不需要提示错误

### 字符串索引签名

`TypeScript` 支持两种索引签名：字符串和数字。 
可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 `number` 来索引时，`JavaScript` 会将它转换成 `string` 然后再去索引对象

 如果 `SquareConfig` 带有上面定义的类型的 `color` 属性，并且还会带有任意数量的其它属性，那么我们可以这样定义它:

```typescript
interface SquareConfig {
    color?: string;
    [prop: string]: string;
}

let t: SquareConfig = { color: 'a', name: '1' }
```

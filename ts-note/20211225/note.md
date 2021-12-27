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

### 

当一个类实现了一个接口时，只对其实例部分进行类型检查。 `constructor` 存在于类的静态部分，所以不在检查的范围内。

### 接口继承类

当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的 `private` 和 `protected` 成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现。
// Object 类型
var t = create({ prop: 0 }); // OK
console.log(t);
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

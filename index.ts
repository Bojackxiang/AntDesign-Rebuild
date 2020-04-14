const hello = (name: string, isMale: boolean, age: number) => {
  console.log("testing");
};

// undefined and null : 所有类型的子类型
let testingNumber_A: number = undefined;
let testingNumber_B: number = null;

// -> any 不仅赋值没有问题，调用函数, 获取属性，也没有问题， 并且类型返回也是any
let notSure_A: any = true;
let notSure_B: any = 12;
notSure_A.getAnyProps;
notSure_B.getMore();
const result = notSure_B.getMore();

// -> uni-types: 联合类型
let numberOrString: string | number;

// -> array
let arrayNumber: number[] = [1, 2, 3, 4];
let arrayNumberOrString: number[] = [1, 2, 3];

// ! arrays like objects
const testing = (arguments: IArguments) => {
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[0]);
};

// -> tuple collect different types rather than single type
// * the difference between array
let user: [string, number] = ["hello", 12];

// -> interface
interface IPerson_A {
  name: string;
  age: number;
}

// -> optional : the property can missing
interface IPerson_B {
  name?: string;
  age?: number;
}

const newUser: IPerson_A = {
  name: "name",
  age: 12,
};

const newUser_B: IPerson_B = {
  // missing all of the properties
};
// !! return undefined
console.log(newUser_B.age);
// * handle undefined
let userName = undefined;
userName = userName ?? "username";

// -> read only: only give it a value when creating it.
// * you should not change the id when you create a user
interface IPerson_C {
  readonly id: string;
  age?: number;
}

// -> function
// * input and output need to be clear
const _add_A = (x: number, y: number): number => {
  return 12;
};

// -> function value with optional
// !! optional parameters must be put at the end
const _add_B = (x: number, y?: number): number => {
  return 12;
};

// -> function value with default value
// * now the y is optional too
let _add_C = (x: number, y: number = 10): number => {
  return 12;
};

// -> you can see the function has a type, and its type is an function
// * and the ts can add the types automatically (you even don't need to write it)
const _add_D: (x: number, y?: number) => number = _add_C;

// tsc index.ts

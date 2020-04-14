const hello = (name: string, isMale: boolean, age: number) => {
  console.log("testing");
};

// undefined and null : 所有类型的子类型
let testingNumber_A: number = undefined
let testingNumber_B: number = null

// any 不仅赋值没有问题，调用函数, 获取属性，也没有问题， 并且类型返回也是any
let notSure_A: any = true
let notSure_B: any = 12
notSure_A.getAnyProps
notSure_B.getMore()
const result = notSure_B.getMore()

// uni-types: 联合类型
let numberOrString: string | number




// tsc index.ts




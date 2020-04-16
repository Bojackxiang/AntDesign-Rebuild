// -> genertics 
// * what problem it solves: I cannot make sure the input value type 
function echo<T>(args: T): T {
    return args
}

const value = echo(10)

function swap<T, U>(tuple: [T, U]): [U, T]{
    return [tuple[1], tuple[0]]
}

// -> constrain generic 
function echoArray_A<T>(array: T[]): T[] {
    // Property 'length' does not exist on type 'T': means not necessary a array, change ti T[]
    // * but, it cannot solve string,(string has the length too )
    return array;
}

// -> only allow the property with length property
// * need to work with the interface 
interface IWithLength {
    length: number
}
// * you must have a T with the property length 
function echoArray_B<T extends IWithLength>(array: T): T {
    console.log(array.length)
    return array;
}

// -> it means, the queue can accept any value(same in one array )
// * class with Generic
class Queue<T> {
    private data = []
    push(item: T){
        return this.data.push(item)
    }
    pop(): T{
        return this.data.shift()
    }
}

const queue_A = new Queue<number>();
queue_A.push(123)
console.log(queue_A.pop().toFixed())

const queue_B = new Queue<string>();
queue_B.push("hello")
console.log(queue_B.pop().length)

// -> change the value order 
interface IKeyPair<T, U> {
    key: T,
    value: U
} 

const key:IKeyPair<number, string> = {key: 1, value: 'string'}
const key2:IKeyPair<string, number> = {key: "string", value: 1}

let arr:string[] = [];
let arr2:number[] = [];

// !! when give it a real value, we must say what the type will be
// * here, the Array is an interface 
let arr3:Array<string> = [] // 实例化的时候，我们必须说这个是什么value
let arr4:Array<number> = [] 

// !! I am not suggest to do the function interface
interface IPlus {
    (a: number, b: number): number
}

function plus(a: number, b: number): number {
    return a + b
}










type PlusType = (x: number, y: number) => number

// -> type 
function sum(x, y){
    return x + y
}

// ❌ bad way to do it
const sum_result_A: (x: number, y: number) => number = sum(1,2)
// ✅ good way to do this
const sum_result_B: PlusType = sum(1,2)

// ===========================================================================
// -> 联合类型
// * union: one part do the input, one part do the output
type inputProps = number | string 
type outputProps = number | string 

const getName = (x:inputProps):outputProps => {
    return 12
}

// ===========================================================================
// * whenusing the union type, we can only access to the shared properties (只能访问共有属性)
// !! us asseration to solve it
const getName_A = (input: inputProps):outputProps => {
    if((<string>input).length){
        return (<string>input).length
    }
}






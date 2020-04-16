// -> genertics 
// * what problem it solves: I cannot make sure the input value type 
function echo<T>(args: T): T {
    return args
}

const value = echo(10)

function swap<T, U>(tuple: [T, U]): [U, T]{
    return [tuple[1], tuple[0]]
}


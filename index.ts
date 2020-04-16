
// -> enum 
// in some case, we should replace all the export const with the enum
enum Direction {
    UP = 'UP',
    DOWN = 'DOWN'
}

let x = Direction.DOWN;

// -> const enum: improve performence 
// * only use const for const enum, rather than the computed enum 
const enum Colors {
    RED = 'RED'
}
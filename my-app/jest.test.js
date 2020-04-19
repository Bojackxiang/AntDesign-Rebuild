

test("first simple test", () => {
    expect(2+2).toBe(4)
    expect(1+1).not.toBe(3)
})

test("test 2", () => {
    expect(1).toBeTruthy()
    expect(0).not.toBeTruthy();
})

test('4', () => {
    expect(3).toBeGreaterThan(1)
    expect(3).toBeLessThan(4)
})


// ! to test the object, dont use to be, tobe means exactly same 
test("test object", () => {
    expect({name: 'alex'}).toEqual({name: 'alex'})
})

/**
 * run {npx jest jest.test.js --watch} at root DIR
 * note: every time when you update it, it will run auto
 * 
 */
import React from 'react';

// -> customized hook : it is just a function
export const useMouseHook = () => {
    // -> (run auto)
    const [pos, setPos] = React.useState({x: 0, y: 0})

    const _mouseMove = (e: MouseEvent) => {
        setPos({x: e.clientX, y: e.clientY})
    }

    // -> listening to the changes of the mouse (run auto)
    React.useEffect(() => {
        document.addEventListener('mousemove', _mouseMove)
        return () => {
            document.removeEventListener('mousemove', _mouseMove)
        }
    }, [])

    // -> return the value (need to retrieve)
    return pos 
}
import React from "react";
import { useMouseHook } from "./useMousePsx";

function App() {
  const [show, setShow] = React.useState(true);
  
  // retrieve the value from the customized hook
  const position = useMouseHook()

  return (
    <div>
      x{position.x} y: {position.y}
      <button onClick={() => setShow(!show)}>show</button>
    </div>
  );
}

export default App;

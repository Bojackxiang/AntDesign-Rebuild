import React from "react";
import Hello from "./Hello";

function App() {
  const [show, setShow] = React.useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>show</button>
      {show && <Hello message="tet" />}
    </div>
  );
}

export default App;

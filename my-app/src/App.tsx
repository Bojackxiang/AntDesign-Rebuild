import React from "react";
import Button, { ButtonType, BtnSize } from "./Components/Buttons/Button";

function App() {
  const x = "123";
  const result = x == "123" ? "true" : "false";
  return (
    <div>
      <Button
        btnType={ButtonType.Danger}
        size={BtnSize.large}
        onClick={(e) => {
          e.preventDefault();
          alert("test");
        }}
      >
        testing
      </Button>
      <Button
        btnType={ButtonType.Link}
        size={BtnSize.large}
        href={"https://google.com"}
        onClick={(e) => {
          e.preventDefault();
          alert("alert");
        }}
      >
        testing
      </Button>
      <h1 className="App-Link">hello world</h1>
    </div>
  );
}

export default App;

import React from "react";
import Button, { ButtonType, BtnSize } from "./Components/Buttons/Button";
import Menu from "./Components/Menu/Menu";
import MenuItem from "./Components/Menu/MenuItem";


function App() {
  const x = "123";
  const result = x == "123" ? "true" : "false";
  return (
    <div>
      <Menu defaultIndex={0} onSelect={(index) => {console.log(index)}}>
        <MenuItem index={0}>test</MenuItem>
        <MenuItem index={1}>test</MenuItem>
        <MenuItem index={2}>test</MenuItem>
      </Menu>
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

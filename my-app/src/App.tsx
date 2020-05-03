import React from "react";
import Button, { ButtonType, BtnSize } from "./Components/Buttons/Button";
import Input from "./Components/Inputs/Input";
import { Uploading } from "./Components/Upload/Index";

function App() {
  const x = "123";
  const result = x == "123" ? "true" : "false";

  return (
    <div>
      <Input />
      <Uploading
        action="https://jsonplaceholder.typicode.com/posts/"
        beforeUpload={(file) => {
          console.log(file.size);
          if (file.size / 1024> 100) return true
          return false
        }}
      />
    </div>
  );
}

export default App;

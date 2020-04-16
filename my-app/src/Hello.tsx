import React from "react";

interface IHelloProps {
  message?: string;
}

// -> set the interface 
const Hello: React.FC<IHelloProps> = (props) => {
  return (
    <div>
    testing
      <h1>{props.message}</h1>
      {props.children}
    </div>
  );
};

// -> setting the default props
Hello.defaultProps = {
    message: "hello world 2"
}

export default Hello;

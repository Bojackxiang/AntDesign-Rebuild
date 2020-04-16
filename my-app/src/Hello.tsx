import React from "react";

interface IHelloProps {
  message?: string;
}

// -> set the interface
const Hello: React.FC<IHelloProps> = (props) => {
  const [clickTimes, setClickTimes] = React.useState(0);

  // -> any changes happened, the use effect will run
  React.useEffect(() => {
    console.log("first use effect runs");
    // !! do not run function in useEffect if you have no dependency
    // * but you can change anything as you want
    document.title = String(clickTimes);
  });

  // -> add event listener in use Effect
  React.useEffect(() => {
    return () => {};
  });

  // -> the control of use effect
  // * only runs when click time change
  React.useEffect(() => {
    console.log("click time changes");
    return () => {};
  }, [clickTimes]);

  // -> the control of use effect
  React.useEffect(() => {
    console.log("component mounted");
    return () => {
        console.log('component unmounted')
    };
  }, []);


  return (
    <div>
      <button onClick={() => setClickTimes(clickTimes + 1)}>click</button>
      {clickTimes}
      <h1>{props.message}</h1>
      {props.children}
    </div>
  );
};

// -> setting the default props
Hello.defaultProps = {
  message: "hello world 3",
};

export default Hello;

import React, { ReactElement, InputHTMLAttributes, ChangeEvent } from "react";
import classNames from "classnames";

type InputSize = "small" | "normal" | "large";

// 两个size 之间有冲突，使用omit忽略一个
// 忽略size

// ! 两个交集中都有size这个属性，那么用新的东西的size来代替老得size

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  disable?: boolean;
  icon?: string;
  size?: InputSize;
  append?: React.ReactElement | string;
  prepend?: React.ReactElement | string;
  onChange?: (e : ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
  const { disable, icon, size, append, prepend, ...restProps } = props;

  const clsNames = classNames("viking-ship-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disable,
    "input-group": prepend || append,
    "input-group-append": !!append,
    "input-group-prepend": !!prepend,
  });

  return (
    <div>
    {prepend && <div className="viking-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper"></div>}
      <input 
        className="viking-input-inner"
        disabled={disable}
        {...restProps}
      />
      {append && <div className="viking-input-group-append">{append}</div>}
    </div>
  );
};

export default Input;

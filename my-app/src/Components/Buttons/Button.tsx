import React from "react";
import classNames from "classnames";

export enum BtnSize {
  large = "lg",
  small = "sm",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

interface BtnProps {
  className?: string;
  disabled?: boolean;
  size?: BtnSize;
  btnType?: ButtonType;
  children?: React.ReactElement | string;
  href?: string;
}

// now we have all attributes of a button
// ! 把联合类型 （or）变成交叉类型 （and）-> 我两个属性我都要
type NativeButtonProps = BtnProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorProps = BtnProps & React.AnchorHTMLAttributes<HTMLElement>;
// ! 我这里指向要部分的属性
export type ButtonProps = Partial<NativeButtonProps & AnchorProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    disabled,
    size,
    btnType,
    children,
    href,
    ...restProps
  } = props;
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType, // 如果有button type这个东西，那么class输出 btn-btnType
    [`btn-${size}`]: size,
    disable: btnType === ButtonType.Link && disabled,
  });

  // if the input is a link
  if (href && btnType === ButtonType.Link) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  }

  // otherwise just return a button
  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};

export default Button;

/**
 * Note:
 * There is no = to set up the enum, see enum as an class
 *
 * Enum Choice:
 * 将interface 和 enum结合，产生选择性的interface
 * 
 * 连个类型 + 交叉类型
 * 
 * {...restProps}
 */

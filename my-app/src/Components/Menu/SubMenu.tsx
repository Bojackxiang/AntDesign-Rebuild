import React, { useContext, FunctionComponentElement, useState } from "react";
import classNames from "classnames";

import { MenuContext } from "./Menu";
import { MenuItemProps } from "./MenuItem";
import "./style.scss";

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, className, children } = props;
  const context = useContext(MenuContext);
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
  });

  const [isDisplay, setIsDisplay] = useState(false);

  const _clickHandler = (e: React.MouseEvent) => {
    setIsDisplay(!isDisplay);
  };

  let timer: any;
  const _handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    setIsDisplay(toggle);
  };

  const hoverEvent = {
    onMouseEnter: (e: React.MouseEvent) => {
      _handleMouse(e, true);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      _handleMouse(e, false);
    },
  };

  const renderChildren = () => {
    const classes = classNames("viking-ship", {
      "submenu-show": isDisplay,
      "submenu-hide": !isDisplay,
    });
    const chidlrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === "MenuItem") {
        return React.cloneElement(childElement, { index: `${index}-${i}` });
      } else {
        console.log("error: 存在不是 menuitem 的东西");
        return;
      }
    });
    return <ul className={classes}>{chidlrenComponent}</ul>;
  };

  return (
    <li key={index} className={classes} {...hoverEvent}>
      <div
        className={classes}
        // onClick={(e) => {
        //   _clickHandler(e);
        // }}
      >
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";
export default SubMenu;

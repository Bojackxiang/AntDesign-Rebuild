import React from "react";
import classNames from "classnames";
import { MenuItemProps } from "./MenuItem";

type selectCallback = (selectIndex: string) => void;
type indexType = number | undefined

export interface MenuProps {
  defaultIndex: string;
  className?: string;
  mode?: "horizontal" | "vertical";
  style?: React.CSSProperties;
  onSelect?: selectCallback;
}

interface IMenuContent {
  index: string; // selected item index
  onSelect?: selectCallback;
}

export const MenuContext = React.createContext<IMenuContent>(
  {index: '0'}
  );

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children } = props;
  /**
   * defaultIndex: 用户输入的，默认 active 的选项
   * className: 用户传进来的，这样用户的就能直接用
   * mode： 横着的还是竖着的
   * style： stylesheet
   * onSelect : 一个 function
   *
   */

  const [currentActive, setCurrentActive] = React.useState(defaultIndex);

  const classes = classNames("alex-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode === "horizontal",
  });

  const _handleClick = (index: string | undefined
    ) => {
    setCurrentActive(index as string);
    if (onSelect) {
      onSelect(index as string);
    }
  };

  // -> pass the parent function and the values to the child component
  const passedContext: IMenuContent = {
    index: currentActive ? currentActive : '0',
    onSelect: _handleClick,
  };

  const renderChildren = React.Children.map(children, (child, index) => {
    const childrenElement = child as React.FunctionComponentElement<
      MenuItemProps
    >;
    const { displayName } = childrenElement.type;
    if (displayName === "MenuItem" || displayName === 'SubMenu') {
      return React.cloneElement(childrenElement, 
        { index: (index.toString() as string) });
    } else {
      console.log("warning: Menu has a child which is not a menu component");
    }
  });

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {/* {children} */}
        {renderChildren}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: '0',
  mode: "horizontal",
};

export default Menu;

/************************************************************************************************
 * 自定义的style
 * style: React.CSSProperties;
 */

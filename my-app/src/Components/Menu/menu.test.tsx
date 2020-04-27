import React from "react";
import {
  render,
  RenderResult,
  fireEvent,
  cleanup,
} from "@testing-library/react";

import Menu, { MenuProps } from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

const testHorizontalProps: MenuProps = {
  defaultIndex: "0",
  className: "sample-classnames",
  mode: "horizontal",
  style: { width: 200 },
  onSelect: () => {console.log('object')}
};

const testVerticalProps: MenuProps = {
  defaultIndex: "0",
  className: "sample-classnames",
  mode: "horizontal",
  style: { width: 200 },
};

const generateMenu = (props: MenuProps) => {
  return (
    <Menu defaultIndex="0" onSelect={(index) => {}}>
      <MenuItem>active</MenuItem>
      <MenuItem>xyz</MenuItem>
      <MenuItem>123</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>1-1</MenuItem>
        <MenuItem>1-2</MenuItem>
        <MenuItem>1-3</MenuItem>
      </SubMenu>
    </Menu>
  );
};

let component: RenderResult, element: HTMLElement, activeElement: HTMLElement;
// * 在tsx中穿件一个style文件
const createStyleFile = () => {
  const cssFile: string = `
    .viking-ship.submenu-show {
      display: block;
    }
    .viking-ship.submenu-hide {
      display: none
    }
  `;
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = cssFile;

  return style;
};

describe("test menu", () => {
  beforeEach(() => {
    component = render(generateMenu(testVerticalProps));
    component.container.append(createStyleFile()) // ! 这样就能直接把style插入
    // 找item是否正确的被rendered
    element = component.getByTestId("test-menu");
    activeElement = component.getByText("active");
  });

  it("rendered the component successfully", () => {
    expect(element).toBeInTheDocument();
    expect(activeElement).toBeInTheDocument();
    expect(element).toHaveClass("menu-horizontal alex-menu "); // element 中里面的东西
    expect(element.getElementsByTagName("li").length).toBe(7); // element 里面的text
    expect(activeElement).toHaveClass("menu-item is-active");
    expect(element.querySelectorAll(":scope > li").length).toEqual(4); // 现在因为隐藏了，所以长度只会是 4
  });

  it("should render correct when click ", () => {
    let first_element = component.getByText("xyz");
    element = component.getByText("123");
    fireEvent.click(element);
    expect(element).toHaveClass("is-active");
    expect(first_element).not.toHaveClass("is-active");
  });

  it("should render vertical mode when class is horizontal", () => {
    //! 因为before each的时候，已经在这个it中运行了
    //-> 我们下面有运行了一边
    cleanup();
    let component = render(generateMenu(testHorizontalProps));
    let domElement = component.getByTestId("test-menu");
    expect(domElement).toHaveClass("menu-horizontal");
  });

  it("should show drop dow menus ", () => {
    expect(component.queryByText("1-1")).not.toBeVisible(); // ! 因为没有添加css样式，所以这里他会是一直显示的
    const dropDownElement = component.getByText('dropdown')
    fireEvent.mouseEnter(dropDownElement)
    expect(component.queryByText('1-1')).toBeVisible()
    fireEvent.mouseLeave(dropDownElement)
    expect(component.queryByText('1-1')).not.toBeVisible()

    // 点击事件
    // fireEvent.click(component.getByText('1-1'))
    // expect(testHorizontalProps.onSelect).toHaveBeenCalledWith(() => {console.log('object')})
    
    
  });
});

let SubMenuComponent = null;
let subMenuElement = null;

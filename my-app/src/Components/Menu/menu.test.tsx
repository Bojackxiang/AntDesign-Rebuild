import React from "react";
import {
  render,
  RenderResult,
  fireEvent,
  cleanup,
} from "@testing-library/react";

import Menu, { MenuProps } from "./Menu";
import MenuItem from "./MenuItem";

const testHorizontalProps: MenuProps = {
  defaultIndex: 0,
  className: "sample-classnames",
  mode: "horizontal",
  style: { width: 200 },
};

const testVerticalProps: MenuProps = {
  defaultIndex: 0,
  className: "sample-classnames",
  mode: "horizontal",
  style: { width: 200 },
};

const generateMenu = (props: MenuProps) => {
  return (
    <Menu
      defaultIndex={0}
      onSelect={(index) => {
        console.log(index);
      }}
    >
      <MenuItem index={0}>active</MenuItem>
      <MenuItem index={1}>xyz</MenuItem>
      <MenuItem index={2}>123</MenuItem>
    </Menu>
  );
};

let component: RenderResult, element: HTMLElement, activeElement: HTMLElement;

describe("test menu", () => {
  beforeEach(() => {
    component = render(generateMenu(testVerticalProps));
    // 找item是否正确的被rendered
    element = component.getByTestId("test-menu");
    activeElement = component.getByText("active");
  });

  it("rendered the component successfully", () => {
    expect(element).toBeInTheDocument();
    expect(activeElement).toBeInTheDocument();
    expect(element).toHaveClass("menu-horizontal alex-menu ");
    // element 中里面的东西
    expect(element.getElementsByTagName("li").length).toBe(3);
    // element 里面的text
    expect(activeElement).toHaveClass("menu-item is-active");
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
    // -> 我们下面有运行了一边
    cleanup();
    let component = render(generateMenu(testHorizontalProps));
    let domElement = component.getByTestId("test-menu");
    expect(domElement).toHaveClass("menu-horizontal");
  });
});

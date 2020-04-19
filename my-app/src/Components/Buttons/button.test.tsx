import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";
import { BtnSize, ButtonType } from "./Button";

test("btn test", () => {
  const wrapper = render(<Button>nice</Button>);
  const element = wrapper.queryByText("nice");
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
});

describe("test button component", () => {
  // 这里可以写 it 或者 test
  it("should render the correct default button", () => {
    const wrapper = render(<Button>nice</Button>);
    const element = wrapper.getByText("nice");
    expect(element.tagName).toEqual("BUTTON"); // TAGNAME 要 大些，这里就是BUTTON
    expect(element).toHaveClass("btn btn-default");
  });
  it("should render the correct default button on different props", () => {
    const wrapper = render(
      <Button size={BtnSize.large} btnType={ButtonType.Primary}>
        test
      </Button>
    );
    const element = wrapper.getByText("test");
    expect(element).toHaveClass("btn btn-primary btn-lg");
  });
  it("should render the correct default button on different props", () => {
    <Button>test</Button>;
  });
  it("should render a link", () => {
    const component = render(<Button size={BtnSize.large} btnType={ButtonType.Link}>test</Button>)
    const dom = component.getByText('test')
    expect(dom).toHaveClass('btn btn-lg btn-link') // !! className 的顺序无关紧要
  });
  it("should render a disabled btn when disable is true", () => {
    <Button>test</Button>;
  });
});

/**
 * Note
 ************************************************
 * render => 拿到整个element
 * element => 根据 wrapper 里面 （其实已经生成了一个dom节点）来找东西
 *
 ************************************************
 * 在terminal里面运行, 而且每次更新都能自动运行
 * npm run test
 *
 ************************************************
 */

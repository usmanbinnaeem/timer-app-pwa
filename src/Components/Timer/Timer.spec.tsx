import React from "react";
import { shallow, mount } from "enzyme";
import Timer from "./Timer";

describe("mounted Timer", () => {
  let container: any;

  beforeEach(() => (container = shallow(<Timer />)));

  it("should change isOn state true when the start button is clicked", () => {
    expect(container.find(".start-timer").first().simulate("click"));
  });

  it("should change isOn state false when the stop button is clicked", () => {
    expect(container.find(".stop-timer").first().simulate("click"));
  });

  it("should change isOn state false when the reset button is clicked", () => {
    expect(container.find(".reset-timer").first().simulate("click"));
  });
});

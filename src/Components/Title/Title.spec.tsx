import React from "react";
import { shallow } from "enzyme";
import Title from "./Title";

describe("render Title component", () => {
  let container: any;
  beforeEach(() => (container = shallow(<Title />)));

  it("should render a div", () => {
    expect(container.find("div").length).toEqual(1);
  });
});

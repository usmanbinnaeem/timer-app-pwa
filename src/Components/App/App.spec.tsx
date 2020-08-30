import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Timer from "../Timer/Timer";
import Title from "../Title/Title";

describe("render App component", () => {
  let container: any;
  beforeEach(() => (container = shallow(<App />)));

  it("should render a div", () => {
    expect(container.find("div").length).toEqual(1);
  });

  it("should render Timer component", () => {
    expect(container.containsMatchingElement(<Timer />)).toEqual(true);
  });

  it("should render title component", () => {
    expect(container.containsMatchingElement(<Title />)).toEqual(true);
  });
});

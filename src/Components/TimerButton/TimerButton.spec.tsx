import React from "react";
import { shallow } from "enzyme";
import TimerButton from "./TimerButton";

describe("TimerButton", () => {
  let container: any;

  beforeEach(() => {
    container = shallow(
      <TimerButton className={""} buttonAction={jest.fn()} buttonValue={""} />
    );
  });

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
});

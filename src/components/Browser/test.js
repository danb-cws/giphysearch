import React from "react";
import { shallow } from "enzyme";
import Browser from "./";

const el = shallow(
  <Browser
    onSetImageData={gif => {
      this.setState({
        currentChoiceData: gif
      });
    }}
  />
);

describe("Browser tests", () => {
  it("Renders the Browser component", () => {
    expect(el.exists()).toBe(true);
  });
  it("Matches snapshot", () => {
    expect(el).toMatchSnapshot();
  });
});

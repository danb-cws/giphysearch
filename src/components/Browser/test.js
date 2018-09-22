import React from "react";
import { shallow } from "enzyme";
import Browser from "./";

const el = shallow(
  <Browser
    onSetImageId={id => {
      this.setState({
        currentId: id
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

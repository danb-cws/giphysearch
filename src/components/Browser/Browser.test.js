import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Browser from "./";

configure({ adapter: new Adapter() });

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
});

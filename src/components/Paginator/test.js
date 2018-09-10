import React from "react";
import { shallow } from "enzyme";
import Paginator from "./";

const el = shallow(
  <Paginator
    onSetImageId={id => {
      this.setState({
        currentId: id
      });
    }}
  />
);

describe("Paginator tests", () => {
  it("Renders the Paginator component", () => {
    expect(el.exists()).toBe(true);
  });
});

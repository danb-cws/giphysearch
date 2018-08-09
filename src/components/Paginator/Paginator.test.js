import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Paginator from "./";

configure({ adapter: new Adapter() });

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
  it("Renders thePaginatorr component", () => {
    expect(el.exists()).toBe(true);
  });
});

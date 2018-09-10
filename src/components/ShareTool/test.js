import React from "react";
import {  shallow } from "enzyme";
import ShareTool from "./index";

const el = shallow(<ShareTool />);

describe("ShareTool tests", () => {
  it("Renders the ShareTool component", () => {
    expect(el.exists()).toBe(true);
  });

});

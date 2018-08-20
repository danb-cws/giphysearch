import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShareTool from "./index";

configure({ adapter: new Adapter() });

const el = shallow(<ShareTool />);

describe("ShareTool tests", () => {
  it("Renders the ShareTool component", () => {
    expect(el.exists()).toBe(true);
  });

});

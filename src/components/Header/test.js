import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./";

configure({ adapter: new Adapter() });

describe("Header tests", () => {
  it("Shows H1", () => {
    const el = shallow(<Header />);
    expect(el.contains(<h1 className="App-header__title">Giphysearch</h1>)).toBe(true);
  });

});

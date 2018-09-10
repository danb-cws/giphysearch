import React from "react";
import { shallow } from "enzyme";
import Header from "./";

describe("Header tests", () => {
  it("Shows H1", () => {
    const el = shallow(<Header />);
    expect(el.contains(<h1 className="App-header__title">Giphysearch</h1>)).toBe(true);
  });

});

import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Spinner from "./";

configure({ adapter: new Adapter() });

describe("Spinner tests", () => {
  it("Shows spinner if showSpinner is true", () => {
    const el = shallow(<Spinner showSpinner={true} />);
    expect(el.contains(<div className="Spinner" />)).toBe(true);
  });

  it("Renders nothing if showSpinner is false", () => {
    const el = shallow(<Spinner showSpinner={false} />);
    expect(el.find(Spinner).exists()).toEqual(false);
  });
});

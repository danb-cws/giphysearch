import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Spinner from "./";

describe("Spinner tests", () => {
  it("Shows spinner if showSpinner is true", () => {
    const el = shallow(<Spinner showSpinner={true} />);
    expect(el.contains(<div className="Spinner" />)).toBe(true);
  });

  it("Renders nothing if showSpinner is false", () => {
    const el = shallow(<Spinner showSpinner={false} />);
    expect(el.find(Spinner).exists()).toEqual(false);
  });

  it("Renders and matches snapshot", () => {
    const component = renderer.create(<Spinner showSpinner={true} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

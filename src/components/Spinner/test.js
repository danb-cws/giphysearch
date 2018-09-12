import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Spinner from "./";

describe("Spinner tests", () => {
  it("Renders and matches snapshot", () => {
    const tree = renderer.create(<Spinner showSpinner={true} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Shows spinner if showSpinner is true", () => {
    const el = shallow(<Spinner showSpinner={true} />);
    expect(el.contains(<div className="Spinner" />)).toBe(true);
  });

  it("Renders nothing if showSpinner is false", () => {
    const el = shallow(<Spinner showSpinner={false} />);
    expect(el.find(Spinner).exists()).toBe(false);
  });
});

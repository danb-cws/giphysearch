import React from "react";
import { shallow } from "enzyme";
import Player from "./";
import testjson from "mock_json/gifMock.json";

const el = shallow(<Player currentChoiceData={testjson} />);

describe("Player tests", () => {
  it("Renders the Player component", () => {
    expect(el.exists()).toBe(true);
  });
  it("Matches snapshot", () => {
    expect(el).toMatchSnapshot();
  });
});

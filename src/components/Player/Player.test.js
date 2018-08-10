import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Player from "./";

configure({ adapter: new Adapter() });

const el = shallow(<Player currentId={"JIX9t2j0ZTN9S"} />);

describe("Player tests", () => {
  it("Renders the Player component", () => {
    expect(el.exists()).toBe(true);
  });
});

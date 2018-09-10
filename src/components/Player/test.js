import React from "react";
import { shallow } from "enzyme";
import Player from "./";

const el = shallow(<Player currentId={"JIX9t2j0ZTN9S"} />);

describe("Player tests", () => {
  it("Renders the Player component", () => {
    expect(el.exists()).toBe(true);
  });
});

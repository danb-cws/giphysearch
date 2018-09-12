import React from "react";
import { mount } from "enzyme";
import Search from "./";

const el = mount(
  <Search />
);

describe("Search tests", () => {
  it("Renders the Search component", () => {
    expect(el.exists()).toBe(true);
  });

  it("Renders and matches snapshot", () => {
    expect(el).toMatchSnapshot();
  });

  it("Responds to onChange on the input", () => {
    el.find('input').simulate("change", {
      target: { value: "hello" }
    });
    expect(el.state("searchTerm")).toEqual("hello");
  });
});

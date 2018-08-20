import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Search from "./";

configure({ adapter: new Adapter() });

const el = mount(
  <Search
    onSearchTermChange={searchTerm => {
      this.setState(
        {
          searchTerm,
          resultsPageIndex: 0,
          selectedItemIndex: 0,
          hasPaginated: false
        },
        () => {
          this.giphySearchHandler();
        }
      );
    }}
  />
);

describe("Search tests", () => {
  it("Renders the Search component", () => {
    expect(el.exists()).toBe(true);
  });
});

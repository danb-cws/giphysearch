import React from "react";
import { mount } from "enzyme";
import Search from "./";

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

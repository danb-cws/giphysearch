import React from "react";
import { shallow } from "enzyme";
import Paginator from "./";
import * as config from "config";

const paginatorClick = jest.fn();

const el = shallow(
  <Paginator
    onPaginate={paginatorClick}
    totalResults={42}
    resultsPageIndex={1}
    dir={1}
  >
    Next
  </Paginator>
);

const elDisabledNext = shallow(
  <Paginator
    onPaginate={paginatorClick}
    totalResults={config.RESULTS_PER_PAGE}
    resultsPageIndex={1}
    dir={1}
  >
    Next
  </Paginator>
);

const elFirstPage = shallow(
  <Paginator
    onPaginate={paginatorClick}
    totalResults={config.RESULTS_PER_PAGE}
    resultsPageIndex={0}
    dir={-1}
  >
    Prev
  </Paginator>
);

const elSecondPage = shallow(
  <Paginator
    onPaginate={paginatorClick}
    totalResults={config.RESULTS_PER_PAGE * 2}
    resultsPageIndex={1}
    dir={-1}
  >
    Prev
  </Paginator>
);

describe("Paginator tests", () => {
  it("Renders the Paginator component", () => {
    expect(el.exists()).toBe(true);
  });
  it("Matches snapshot", () => {
    expect(el).toMatchSnapshot();
  });
  it("responds to click", () => {
    el.simulate("click", { paginatorClick });
    expect(paginatorClick).toBeCalled();
  });
  it("`Next` Paginator should not have disabled class on paginator if enough results for another page", () => {
    expect(el.hasClass("Paginator__disabled")).toBe(false);
  });
  it("`Next` Paginator should have disabled class on  paginator if not enough results for another page", () => {
    expect(elDisabledNext.hasClass("Paginator__disabled")).toBe(true);
  });
  it("`Prev` Paginator should not have disabled class on paginator if not on first page", () => {
    expect(elSecondPage.hasClass("Paginator__disabled")).toBe(false);
  });
  it("`Prev` Paginator should have disabled class on paginator if on first page", () => {
    expect(elFirstPage.hasClass("Paginator__disabled")).toBe(true);
  });
});

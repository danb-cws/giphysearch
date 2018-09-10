import React from "react";
import { shallow } from "enzyme";
import ResultListItem from "./";
import testjson from "mock_json/gifMock.json";
import * as config from "config";

const elSelected = shallow(
  <ResultListItem
    gif={testjson}
    selectedItemIndex={config.RESULTS_PER_PAGE + 2}
    index={2}
    resultsPageIndex={1}
    onItemSelect={() => {
      return true;
    }}
    ChildNodeName={"li"}
  />
);

/*const elUnselected = shallow(
  <ResultListItem
    gif={testjson}
    selectedItemIndex={config.RESULTS_PER_PAGE + 2}
    index={3}
    resultsPageIndex={1}
    onItemSelect={() => {
      return true;
    }}
    ChildNodeName={"li"}
  />
);*/

describe("ResultListItem tests", () => {
  it("Renders the component", () => {
    expect(elSelected.exists()).toBe(true);
  });

  it("Correctly adds class to the selected item", () => {
    expect(
      elSelected
        .find(".ResultList--item--link")
        .hasClass("ResultList--item--link__selected-item")
    ).toBe(true);
  });

/* TODO revisit this */

/*  it("Actions click on item", () => {
    expect(
      elUnselected.find(".ResultList--item--link").simulate("click", { preventDefault(){} })
    ).toBeTruthy();
  });*/

});

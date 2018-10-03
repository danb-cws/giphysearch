import React from "react";
import { shallow } from "enzyme";
import ResultListItem from "./";
import testjson from "mock_json/gifMock.json";
import * as config from "config";

const elSelected = shallow(
  <ResultListItem
    key={testjson.id}
    gif={testjson}
    selectedItemIndex={config.RESULTS_PER_PAGE + 2}
    index={2}
    resultsPageIndex={1}
    //onItemSelect={testjson.id}
    ChildNodeName={"li"}
  />
);

describe("ResultListItem tests", () => {
  it("Renders the component", () => {
    expect(elSelected.exists()).toBe(true);
  });

  it("Matches snapshot", () => {
    expect(elSelected).toMatchSnapshot();
  });

  it("Correctly adds class to the selected item", () => {
    expect(
      elSelected
        .find(".Result-list__item__link")
        .hasClass("Result-list__item__link--selected-item")
    ).toBe(true);
  });

});

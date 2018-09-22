import React from "react";
import { shallow } from "enzyme";
import ResultList from "./";
import testjson from "mock_json/gifsMock.json";

const el = shallow(
  <ResultList
    gifs={testjson}
    selectedItemIndex={1}
    totalResults={999}
    resultsPageIndex={2}
    onItemSelect={(index, giphyId) => {
      this.setState(
        {
          selectedItemIndex: index,
          currentId: giphyId
        },
        () => {
          this.props.onSetImageId(giphyId);
        }
      );
    }}
    onPaginate={dir => {
      this.setState(
        {
          resultsPageIndex: 2 + dir,
          hasPaginated: true
        },
        () => {
          this.giphySearchHandler();
        }
      );
    }}
  />
);

describe("ResultList tests", () => {
  it("Renders the ResultList component", () => {
    expect(el.exists()).toBe(true);
  });
  it("Matches snapshot", () => {
    expect(el).toMatchSnapshot();
  });
});

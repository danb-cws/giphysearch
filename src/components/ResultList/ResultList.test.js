import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ResultList from "./";
import testjson from "./gifsMock.json";

configure({ adapter: new Adapter() });

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
});

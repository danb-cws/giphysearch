import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ErrorScreen from "./";

configure({ adapter: new Adapter() });

describe("ErrorScreen tests", () => {

  it("Responds with 'please enter term' if no gifs and json has loaded", function() {
    expect(
      shallow(
        <ErrorScreen gifs={[]} searchTerm={""} jsonIsLoaded={true} />
      ).contains(
        <div className="ErrorScreen">
          Please enter a term in the search field
        </div>
      )
    ).toBe(true);
  });

  it("Responds with 'no matches for testTerm' if no gifs and json has loaded and searchTerm exists", () => {
    expect(
      shallow(
        <ErrorScreen gifs={[]} searchTerm={"testTerm"} jsonIsLoaded={true} />
      ).contains(
        <div className="ErrorScreen">No gifs available for "testTerm"</div>
      )
    ).toBe(true);
  });
});

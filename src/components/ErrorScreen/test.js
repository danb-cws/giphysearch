import React from "react";
import { shallow } from "enzyme";
import ErrorScreen from "./";

describe("ErrorScreen tests", () => {
  it("Renders and matches snapshot", () => {
    const tree = shallow(<ErrorScreen gifs={[]} searchTerm={"test term"} jsonIsLoaded={true} />);
    expect(tree).toMatchSnapshot();
  });

  it("Responds with 'please enter term' if no gifs and json has loaded", function() {
    expect(
      shallow(
        <ErrorScreen gifs={[]} searchTerm={""} jsonIsLoaded={true} />
      ).contains(
        <section className="Error-screen">
          Please enter a term in the search field
        </section>
      )
    ).toBe(true);
  });

  it("Responds with 'no matches for testTerm' if no gifs and json has loaded and searchTerm exists", () => {
    expect(
      shallow(
        <ErrorScreen gifs={[]} searchTerm={"testTerm"} jsonIsLoaded={true} />
      ).contains(
        <section className="Error-screen">No gifs available for "testTerm"</section>
      )
    ).toBe(true);
  });
});

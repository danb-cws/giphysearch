import React from "react";
import ReactDOM from "react-dom";
import ErrorScreen from "./";

it("ErrorScreen smoke test", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ErrorScreen
          gifs={{}}
          searchTerm={'testTerm'}
          jsonIsLoaded={true}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

/*
it("ErrorScreen responds with 'please enter term' if no gifs and json has loaded", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ErrorScreen
          gifs={[]}
          searchTerm={''}
          jsonIsLoaded={true}/>, div);
  expect(div).toMatch(<div><div class="ErrorScreen">Please enter a term in the search field</div></div>);
  ReactDOM.unmountComponentAtNode(div);
});
*/

/*it("ErrorScreen responds with 'no matches for testTerm' if no gifs and json has loaded and searchTerm exists", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ErrorScreen
          gifs={{}}
          searchTerm={'testTerm'}
          jsonIsLoaded={true}/>, div);
  expect(div.contains(<div className="ErrorScreen">No gifs available for testTerm</div>)).toBeTruthy;
  ReactDOM.unmountComponentAtNode(div);
});*/

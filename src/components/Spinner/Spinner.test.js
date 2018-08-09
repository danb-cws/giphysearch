import React from "react";
import ReactDOM from "react-dom";
import Spinner from "./";

it("Spinner smoke test", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Spinner />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/*it("Renders spinner when truthy showSpinner arg passed in", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Spinner showSpinner={true}/>, div);
  expect(div.contains(<div className="Spinner" />)).toBeTruthy;
  ReactDOM.unmountComponentAtNode(div);
});

it("Dosnt render spinner when falsy showSpinner arg passed in", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Spinner showSpinner={false}/>, div);
  expect(div.contains(null)).toBeTruthy;
  ReactDOM.unmountComponentAtNode(div);
});*/

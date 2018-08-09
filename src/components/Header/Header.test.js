import React from "react";
import ReactDOM from "react-dom";
import Header from "./";

it("Header smoke test", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Header contains H1: Giphysearch", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
  expect(div.contains(<h1 className="App-header__title">Giphysearch</h1>)).toBeTruthy;
  ReactDOM.unmountComponentAtNode(div);
});

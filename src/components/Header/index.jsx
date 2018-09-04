import React from "react";
import "./style.css";

const Header = () => {
  return (
    <React.Fragment>
    <header className="App-header">
      <h1 className="App-header__title">Giphysearch</h1>
      <p className="App-header__intro">
        A code demo by Dan B
        <a
          href="https://github.com/danb-cws/giphysearch"
          className="github-link"
          title="Github link"
        >
          Github
        </a>
      </p>
    </header>
    <section className="App-welcome">
      Welcome to Giphysearch
    </section>
    </React.Fragment>
  );
};
export default Header;

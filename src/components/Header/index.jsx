import React from "react";
import "./style.css";

const welcomeMsg = (<section className="App-welcome">
  <h2 className="App-welcome__title">Welcome to Giphysearch</h2>
  <p className="App-welcome__body">Giphysearch is a React application that allows you to search the Giphy API within a fast and reactive interface.</p>
</section>);

const Header = ({ currentId }) => {
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
      {currentId === undefined
        ? welcomeMsg
        : null}
    </React.Fragment>
  );
};
export default Header;

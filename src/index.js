import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById("App"));
// eslint-disable-next-line
registerServiceWorker();

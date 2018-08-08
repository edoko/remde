import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import index from "./reducers";
import App from "./App";
import "./normalize.css";
import "antd/dist/antd.css";
import "./style.css";

const stores = createStore(
  index,
  // redux devtools를 사용하기 위해 추가
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import index from "./reducers";
import App from "./App";
import Content from "./components/Content";
import Create from "./components/Create";
import history from "./history";
import "./normalize.css";
import "antd/dist/antd.css";
import "./style.css";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const stores = createStoreWithMiddleware(
  index,
  // redux devtools를 사용하기 위해 추가
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={stores}>
    <Router history={history}>
      <App>
        <Route exact path="/" component={Create} />
        <Route path="/content/:id" component={Content} />
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);

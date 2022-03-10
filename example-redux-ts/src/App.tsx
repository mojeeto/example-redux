import React from "react";
import store from "./components/app/app";
import Users from "./components/Users";
import { Provider } from "react-redux";

const App: React.FC = () => (
  <Provider store={store}>
    <article>
      <h1>Example Redux TypeScript</h1>
      <Users />
    </article>
  </Provider>
);

export default App;

import { Provider } from "react-redux";
import { store } from "./components/app";
import Users from "./components/Users";

const App = () => {
  return (
    <Provider store={store}>
      <article>
        <h1>Example Redux JS</h1>
        <Users />
      </article>
    </Provider>
  );
};

export default App;

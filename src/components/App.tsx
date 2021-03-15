import { Provider } from "react-redux";
import { store } from "../state";
import React from "react";
import RepositoriesList from "./RepositoriesList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>search for a package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;

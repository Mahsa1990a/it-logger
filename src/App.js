import React, { Fragment ,useEffect } from "react";
import Searchbar from "./components/layout/Searchbar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import { Provider } from 'react-redux';
import store from "./store";

// Materialize:
import 'materialize-css/dist/css/materialize.min.css'; //import materialize
import M from 'materialize-css/dist/js/materialize.min.js';// import js in case for doing modals and ...

import './App.css';

const App = () => {

  useEffect(() => {
    // This initializes Materialize JavaScript:
    M.AutoInit(); //AutoInit is a func, when we install Materialize, we can use it like this
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <Searchbar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;

import React, { Fragment ,useEffect } from "react";
import Searchbar from "./components/layout/Searchbar";

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
    <Fragment>
      <Searchbar />
    </Fragment>
  );
}

export default App;

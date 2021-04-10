import React, { useEffect } from "react";

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
    <div className="App">
      My App
    </div>
  );
}

export default App;

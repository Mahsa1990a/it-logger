//useState: because we're gonna store the logs in our component level state and later we'll move it to redux
// useEffect: we wanna be able to make our request
import React, { useState, useEffect } from 'react'; 
import LogItem from "./LogItem";
import Preloader from '../layout/Preloader';

const Logs = () => {

  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { // Using useEffect for calling getLogs() once after loading App
    getLogs();
    // eslint-disable-next-line
  }, []); // We only want to run them once so => []

  const getLogs = async () => {
    setLoading(true);
    // Make a request from backend(using fetch instead of axios):
    const res = await fetch('http://localhost:5000/logs'); //fetch returns a promiss // becuase we added proxy we dont need to say http://localhost:5000/logs
    // Id doesnt return data right away, we have to format it as json:
    const data = await res.json();
    console.log("data", data);

    setLogs(data); // Set the logs to data //store "logs" from db.json to state
    setLoading(false);
  };

  if(loading) {
    return <Preloader />
  }

  return (
    //collection is a class
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {/* We wanna map through our logs and output a list item: */}
      { !loading && logs.length === 0 ?   //if it's not loading(it's done loading) and there is no logs
        (<p className="center">No Logs To Show...!</p>) : 
        // (logs.map(log => <li>{log.message}</li>)) So we wanna output LogItem:
        (logs.map(log => <LogItem key={log.id} log={log}/>))
      }
    </ul>
  )
}

export default Logs;

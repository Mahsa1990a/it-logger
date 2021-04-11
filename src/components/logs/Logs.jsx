//useState: because we're gonna store the logs in our component level state and later we'll move it to redux
// useEffect: we wanna be able to make our request
import React, { useState, useEffect } from 'react'; 

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
    const res = await fetch('/logs'); //fetch returns a promiss // becuase we added proxy we dont need to say http://localhost:5000/logs
    // Id doesnt return data right away, we have to format it as json:
    const data = await res.json();

    setLogs(data); // Set the logs to data
    setLoading(false);
  };

  if(loading) {
    return <h4>Loading...</h4>
  }

  return (
    <div>
      
    </div>
  )
}

export default Logs;
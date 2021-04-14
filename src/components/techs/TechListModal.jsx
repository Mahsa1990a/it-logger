//useState: because we're gonna store the logs in our component level state and later we'll move it to redux
// useEffect: we wanna be able to make our request
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechItem from "./TechItem";
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ getTechs }) => {

  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { // Using useEffect for calling getLogs() once after loading App
    getTechs();
    // eslint-disable-next-line
  }, []); // We only want to run them once so => []

  const getTechs = async () => {
    setLoading(true);
    // Make a request from backend(using fetch instead of axios):
    const res = await fetch('http://localhost:5000/techs');
    // Id doesnt return data right away, we have to format it as json:
    const data = await res.json();
    console.log("data", data);

    setTechs(data); // Set the logs to data //store "logs" from db.json to state
    setLoading(false);
  };

  return (
    // Coming from href in AddBtn.jsx
    <div id="tech-list-modal" className="modal" >
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {/* When the loading is done, map through techs: */}
          {!loading && techs.map(tech => (
            <TechItem key={tech.id} tech={tech} />
          ))}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechListModal);

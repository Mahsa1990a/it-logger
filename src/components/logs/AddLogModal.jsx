// This is gonna be a form so we'll have some component level state
import React, { useState } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { addLog } from "../../actions/logActions";
import TechSelectOptions from '../techs/TechSelectOptions';

import M from 'materialize-css/dist/js/materialize.min.js'; // For alert

const AddLogModal = ({ addLog }) => {

  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    // Error checking:
    if(message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' })
    } else {
      // console.log(message, tech, attention);
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      };

      addLog(newLog); //our redux action

      M.toast({ html: `Log added by ${tech}`}); //alert
      
      // Clear fields:
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    // It's gonna be a modal so div will have id which this id is match with href of add btn in the AddBtn.jsx:
    <div id='add-log-modal' className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>

        <div className="row">
          <div className="input-field">
            <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
            <label htmlFor="message" className="active">Log Message</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)} >
              <option value="" disabled>
                Select Technician
              </option>
              {/* <option value="John Doe">John Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Sara Wilson">Sara Wilson</option>    REPLACE THESE 3 With: */}
              <TechSelectOptions />
            </select>
          </div>
        </div>
        {/* Checkbox for attention: */}
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e => setAttention(!attention)} />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-light blue btn" >Enter</a>
      </div>
    </div>
  )
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
}

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default connect(null, { addLog })(AddLogModal);

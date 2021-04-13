// This is gonna be a form so we'll have some component level state
import React, { useState } from 'react';

const AddLogModal = () => {

  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

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
      </div>
    </div>
  )
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default AddLogModal;

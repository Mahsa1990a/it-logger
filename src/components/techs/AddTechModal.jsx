// This is gonna be a form so we'll have some component level state
import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; // For alert

const AddTechModal = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    // Error checking:
    if(firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter the first and last name' })
    } else {
      console.log(firstName, lastName);
      
      // Clear fields:
      setFirstName('');
      setLastName('');
    }
  };

  return (
    // It's gonna be a modal so div will have id which this id is match with href of add btn in the AddBtn.jsx:
    <div id='add-tech-modal' className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>

        <div className="row">
          <div className="input-field">
            <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <label htmlFor="firstName" className="active">First Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
            <label htmlFor="lastName" className="active">Last Name</label>
          </div>
        </div>

      </div>

      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-light blue btn" >Enter</a>
      </div>
    </div>
  )
};

export default AddTechModal;

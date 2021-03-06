import React, { useRef } from 'react'; // use useRef hook to get the value from form
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';

const Searchbar = ({ searchLogs }) => {

  const text = useRef('');

  const onChange = e => {
    searchLogs(text.current.value);
  }

  return (
    <nav style={{ marginBottom: '30px' }} className="blue" >
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" placeholder="Search Logs..." ref={text} onChange={onChange} />
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
};

Searchbar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
}

export default connect(null, { searchLogs })(Searchbar); //we're not getting anything from state => so it'll be null

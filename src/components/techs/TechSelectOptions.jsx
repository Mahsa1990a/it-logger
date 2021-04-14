import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  return (
    <div>
      
    </div>
  );
};

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func,isRequired
};

const mapStateToProps = state => ({
  teshs: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);

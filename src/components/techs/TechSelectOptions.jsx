import React, { useEffect } from 'react'; // we need to call getTechs when component loads, so we need useEffect
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []); //We only want to run it when component mounts so []

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

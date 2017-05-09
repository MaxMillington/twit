import PropTypes from 'prop-types';
import React from 'react';

const HelloWorld = ({ name, updateName, output, performCalculation }) => (
  <div className="what">
    <hr />
    <form >
      <textarea
        id="name"
        rows="10"
        cols="50"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
    <button
      className="submit-button"
      onClick={() => performCalculation(name)}
    >
      Submit
    </button>
    <div>
      {output}
    </div>
  </div>
);

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
  result: PropTypes.string,
  performCalculations: PropTypes.func
};

export default HelloWorld;

import React from 'react';
import PropTypes from 'prop-types';

import './DropdownItem.css';


const DropdownItem = (props) => {
  return (
    // <option>{props.name}{props.id}</option>
    <option>{props.name}</option>
  );
};

DropdownItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default DropdownItem;

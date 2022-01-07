import React from "react";
import PropTypes from "prop-types";

import "./DropdownItem.css";

const DropdownItem = (props) => {
  return (
    // <option>{props.name}{props.id}</option>
    // -MB let's add an id to each option and it will be the board id it's associated with
    <option id={props.boardId}>{props.name}</option>
  );
};

DropdownItem.propTypes = {
  name: PropTypes.string.isRequired,
  boardId: PropTypes.number.isRequired,
};

export default DropdownItem;

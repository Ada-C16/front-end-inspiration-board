import React from "react";

const Display = (props) => {
  return (
    <div>
      <h2>
        {props.title} - {props.owner}{" "}
      </h2>
    </div>
  );
};

export default Display;

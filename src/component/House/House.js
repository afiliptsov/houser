import React from "react";

const House = props => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.address}</p>
      <p>{props.city}</p>
      <p>{props.state}</p>
      <p>{props.zip}</p>
    </div>
  );
};

export default House;

import React from "react";
import PropTypes from "prop-types";

function TapDetails(props) {
  const { tap }
  return (
    <React.Fragment>
      <h2>
        <strong>{props.name}</strong> from {props.brand}
      </h2>
      <p>
        <em>{props.alcoholContent}% abv</em>
      </p>
      <p>{props.description}</p>
    </React.Fragment>
  );
}

TapDetails.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  alcoholContent: PropTypes.number,
  description: PropTypes.string,
};

export default TapDetails;

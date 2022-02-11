import React from "react";
import PropTypes from "prop-types";

function TapDetails(props) {
  const { tap } = props;
  return (
    <React.Fragment>
      <h2>
        <strong>{tap.name}</strong> from {tap.brand}
      </h2>
      <p>
        <em>{tap.alcoholContent}% abv</em>
      </p>
      <p>{tap.description}</p>
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

import React from "react";
import PropTypes from "prop-types";

function TapDetails(props) {
  const { tap, onClickingDelete, onClickingEdit } = props;
  return (
    <React.Fragment>
      <h2>
        <strong>{tap.name}</strong> from {tap.brand}
      </h2>
      <p>
        <em>{tap.alcoholContent}% abv</em>
      </p>
      <p>{tap.description}</p>
      <button onClick={() => onClickingDelete(tap.id)}>Delete Tap</button>
      <button onClick={onClickingEdit}>Edit Tap</button>
    </React.Fragment>
  );
}

TapDetails.propTypes = {
  tap: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default TapDetails;

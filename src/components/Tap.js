import React from "react";
import PropTypes from "prop-types";

function Tap(props) {
  return (
    <React.Fragment>
      <h3>
        {props.brand} <strong>{props.name}</strong>
      </h3>
      <p>${props.price} per pint</p>
      <p>
        <em>{props.alcoholContent}% abv</em>
      </p>
      {props.beersSold === 124 ? (
        <p>Sorry! This keg is blown.</p>
      ) : (
        <p>Remaing pints in keg: {124 - props.beersSold}</p>
      )}
    </React.Fragment>
  );
}

Tap.defaultProps = {
  beersSold: 0,
};

Tap.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  beersSold: PropTypes.number,
};

export default Tap;

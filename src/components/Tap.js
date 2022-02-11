import React from "react";
import PropTypes from "prop-types";

function Tap(props) {
  return (
    <React.Fragment>
      <h3>
        {props.name} - {props.brand}
      </h3>
      <h4>
        <em>{props.alcoholContent}% abv</em>
      </h4>
      {props.beersSold === 124 ? (
        <p>Sorry! This keg is blown.</p>
      ) : (
        <p>quantity: {124 - props.beersSold}</p>
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

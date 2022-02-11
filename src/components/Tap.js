import React from "react";
import PropTypes from "prop-types";

function Tap(props) {
  const styles = {
    linkStyling: {
      border: "1 black",
      // padding: "16px 5px",
      // hover underline not working
      cursor: "pointer",
      "& a": {
        textDecoration: "none",
      },
      "& a:hover": {
        textDecoration: "underline",
      },
    },
  };
  return (
    <React.Fragment>
      <div
        style={styles.linkStyling}
        onClick={() => props.whenTapClicked(props.id)}
      >
        <h3>
          {props.brand} <strong>{props.name}</strong>
        </h3>
      </div>
      <p>$ {props.price} per pint</p>
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
  alcoholContent: PropTypes.number,
  beersSold: PropTypes.number,
};

export default Tap;

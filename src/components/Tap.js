import React from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

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
      <p>
        {props.beersSold === 124 ? (
          <span>Sorry! This keg is blown.</span>
        ) : (
          <span>Remaing pints in keg: {124 - props.beersSold}</span>
        )}
        <FaMinus style={{ color: "darkgreen", cursor: "pointer" }} />
        <FaPlus style={{ color: "blue", cursor: "pointer" }} />
      </p>
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
  whenTapClicked: PropTypes.func,
};

export default Tap;

import React from "react";
import PropTypes from "prop-types";
import Tap from "./Tap";

function TapList(props) {
  return (
    <React.Fragment>
      {props.currentTapList.map((tap) => (
        <Tap
          whenTapClicked={props.onTapSelection}
          whenBeerSold={props.onChangingBeersSold}
          name={tap.name}
          brand={tap.brand}
          price={tap.price}
          alcoholContent={tap.alcoholContent}
          beersSold={tap.beersSold}
          id={tap.id}
          key={tap.id}
        />
      ))}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func,
  onChangingBeersSold: PropTypes.func,
};

export default TapList;

import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewTapForm(props) {
  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      alcoholContent: parseFloat(event.target.alcoholContent.value),
      price: parseFloat(event.target.price.value),
      description: event.target.description.value,
      beersSold: parseInt(event.target.beersSold.value),
      id: v4(),
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTapFormSubmission}
        buttonText="Add Tap!"
      />
    </React.Fragment>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func,
};

export default NewTapForm;

import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" placeholder="Beer Name" />
        <br />

        <label htmlFor="brand">Brand:</label>
        <input type="text" name="brand" placeholder="Brand" />
        <br />

        <label htmlFor="alcoholContent">ABV%:</label>
        <input
          type="number"
          name="alcoholContent"
          placeholder="4.0"
          min="0"
          step=".1"
        />
        <br />

        <label htmlFor="price">Price:</label>
        <input type="number" name="price" placeholder="6" min="0" step=".5" />
        <br />

        <label htmlFor="beersSold">Number of beers sold:</label>
        <input
          type="number"
          name="beersSold"
          placeholder="0"
          min="0"
          max="124"
          step="1"
        />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea name="description" placeholder="Description" />
        <br />

        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;

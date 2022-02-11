import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Beer Name" />
        <input type="text" name="brand" placeholder="Brand" />
        <input type="number" name="alcoholContent" value="4.0" min="0" step=".1" />
        <input type="text" name="price" value="6" min="0" step=".5" />
        <textarea name="description" placeholder="Description" />
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

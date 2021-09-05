import React from "react";
import PropTypes from "prop-types";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map((opt) => (
        <button type="button" key={opt} onClick={onLeaveFeedback}>
          {opt.toUpperCase().slice(0, 1) + opt.slice(1)}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

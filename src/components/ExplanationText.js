import React from "react";
import { connect } from "react-redux";
import { dataDescription } from "../utils/data";

const mapStateToProps = (state, ownProps) => {
  const name = ownProps.name;
  const findDataForName = dataDescription.filter(
    element => element.name === name
  );
  const explanation = findDataForName[0].explanation;
  return {
    showExplanation: state.visibleExplanations.includes(name),
    explanation
  };
};

const ExplanationText = connect(
  mapStateToProps,
  null
)(({ explanation, showExplanation }) => {
  if (showExplanation) {
    return <p>{explanation}</p>;
  }
  return null;
});

export default ExplanationText;

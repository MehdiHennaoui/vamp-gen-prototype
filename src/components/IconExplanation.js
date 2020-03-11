import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import React from "react";
import { connect } from "react-redux";
import { displayExplanation, hiddenEplanation } from "../services/actions";

const mapStateToProps = state => {
  return {
    visibleExplanations: state.visibleExplanations
  };
};

const IconExplanation = connect(
  mapStateToProps,
  { displayExplanation, hiddenEplanation }
)(({ name, visibleExplanations, displayExplanation, hiddenEplanation }) => {
  const nameItIsInExplanation = visibleExplanations.includes(name);
  const iconName = nameItIsInExplanation ? "highlight_off" : "help";

  const toogleExplanation = () => {
    if (nameItIsInExplanation) {
      return hiddenEplanation(name);
    }
    return displayExplanation(name);
  };

  return (
    <InputAdornment name={name}>
      <IconButton onClick={toogleExplanation} aria-label="Toggle visibility">
        <Icon>{iconName}</Icon>
      </IconButton>
    </InputAdornment>
  );
});

export default IconExplanation;

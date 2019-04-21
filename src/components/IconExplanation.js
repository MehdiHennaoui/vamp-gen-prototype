import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import React from "react";
import displayExplanation from "./../context/displayExplanation";

const IconExplanation = ({ name }) => {
  return (
    <displayExplanation.Consumer>
      {({ displayExplanation, showExplanation }) => (
        <InputAdornment onClick={() => showExplanation(name)} name={name}>
          <IconButton aria-label="Toggle visibility">
            <Icon>
              {displayExplanation === name ? "highlight_off" : "help"}
            </Icon>
          </IconButton>
        </InputAdornment>
      )}
    </displayExplanation.Consumer>
  );
};

export default IconExplanation;

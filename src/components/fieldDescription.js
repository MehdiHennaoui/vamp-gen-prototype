import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import React, { Component, Fragment } from "react";
import IconExplanation from "./IconExplanation";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import ExplanationText from "./ExplanationText";
import displayExplanation from "./../context/displayExplanation";

export class fieldDescription extends Component {
  state = {
    displayExplanation: ""
  };

  render() {
    const {
      id,
      label,
      require,
      explanation,
      input: { name, onChange, value, ...restInput },
      meta
    } = this.props;
    return (
      <Fragment>
        <FormControl>
          <InputLabel
            error={meta.error && meta.touched}
            htmlFor={name}
            required={require}
          >
            {label}
          </InputLabel>
          <Input
            name={name}
            id={name}
            key={id}
            endAdornment={<IconExplanation name={name} />}
            error={meta.error && meta.touched}
            inputProps={restInput}
            value={value}
            onChange={onChange}
            type={name === "age" ? "number" : "text"}
            min={name === "age" ? 1 : "undefined"}
            required
          />
          <FormHelperText error={meta.error && meta.touched}>
            {meta.touched ? meta.error : undefined}
          </FormHelperText>
          <displayExplanation.Consumer>
            {({ displayExplanation }) =>
              displayExplanation === name && (
                <ExplanationText explanation={explanation} />
              )
            }
          </displayExplanation.Consumer>
        </FormControl>
      </Fragment>
    );
  }
}

export default fieldDescription;

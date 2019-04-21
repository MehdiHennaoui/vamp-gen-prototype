import React, { Component } from "react";
import Description from "./description/Description";
import { Form, Field } from "react-final-form";
import displayExplanation from "../../context/displayExplanation";

const onSubmit = () => {
  console.log("coucou");
};

const validate = values => {
  const errors = {};
  const require = "champ est requis";
  if (!values.player) {
    errors.player = require;
  }
  if (!values.vampire) {
    errors.vampire = require;
  }
  if (!values.age) {
    errors.age = require;
  }
  if (values.age < 0) {
    errors.age = "un vampire ne peut pas avoir un age négatif";
  }
  if (!values.nature) {
    errors.nature = require;
  }
  if (!values.demeanor) {
    errors.demeanor = require;
  }
  return errors;
};

class CreateVampireForm extends Component {
  showExplanation = name => {
    this.setState(state => ({
      displayExplanation: state.displayExplanation === name ? "" : name
    }));
  };

  state = {
    displayExplanation: "",
    showExplanation: this.showExplanation
  };

  render() {
    return (
      <div>
        <h1>création vampire</h1>
        <displayExplanation.Provider value={this.state}>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit, form, pristine, submitting, invalid }) => (
              <form onSubmit={handleSubmit}>
                <Description />
                <button type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
              </form>
            )}
          />
        </displayExplanation.Provider>
      </div>
    );
  }
}
export default CreateVampireForm;

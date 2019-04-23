import React, { Component } from "react";
import Description from "./description/Description";
import Clans from "./clans";
import { Form } from "react-final-form";
import displayExplanation from "../../context/displayExplanation";

const onSubmit = values => {
  console.log(values);
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
            onSubmit={values => onSubmit(values)}
            validate={validate}
            initialValues={{
              clan: "Brujah",
              age: 20
            }}
            mutators={{
              changeClanValue: ([args], state, utils) => {
                utils.changeValue(state, "clan", () => args);
              }
            }}
            render={({
              handleSubmit,
              pristine,
              submitting,
              values,
              form: { mutators }
            }) => {
              const displayClans =
                values.player &&
                values.vampire &&
                values.age &&
                values.nature &&
                values.demeanor ? (
                  <Clans />
                ) : null;
              return (
                <form onSubmit={handleSubmit}>
                  <pre>{JSON.stringify(values, 0, 2)}</pre>
                  <Description />
                  {<Clans {...mutators} />}
                  <button type="submit" disabled={submitting || pristine}>
                    Submit
                  </button>
                </form>
              );
            }}
          />
        </displayExplanation.Provider>
      </div>
    );
  }
}
export default CreateVampireForm;

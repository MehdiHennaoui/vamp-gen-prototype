import React, { Component } from "react";
import { dataDescription } from "./../../../utils/data";
import FieldDescription from "./../../../components/fieldDescription";
import { Field } from "react-final-form";
import newId from "./../../../utils/newId";

class Description extends Component {
  render() {
    return (
      <>
        <h2>Description</h2>
        {dataDescription.map(item => {
          return (
            <Field key={item.name} {...item} component={FieldDescription} />
          );
        })}
      </>
    );
  }
}

export default Description;

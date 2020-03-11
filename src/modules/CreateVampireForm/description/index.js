import React, { Component } from "react";
import { dataDescription } from "./../../../utils/data";
import FieldDescription from "./../../../components/FieldDescription";

class Description extends Component {
  render() {
    return (
      <>
        <h2>Description</h2>
        {dataDescription.map(item => {
          return <FieldDescription key={item.name} {...item} />;
        })}
      </>
    );
  }
}

export default Description;

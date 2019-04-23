import React, { useState } from "react";
import Slider from "react-slick";
import { clans } from "../../../utils/data";
import Icon from "@material-ui/core/Icon";
import { Field } from "react-final-form";
import setFieldData from "final-form-set-field-data";

const NextArrow = ({ className, onClick, name }) => (
  <Icon className={className} onClick={onClick}>
    {name}
  </Icon>
);

const ClanRadio = ({ name, selectedClan }) => {
  const isChecked = name === selectedClan;
  return (
    <Field
      name="clan"
      component="input"
      type="radio"
      value={name}
      checked={isChecked}
    />
  );
};

const Clans = props => {
  const [selectedClan, SetSelectedClan] = useState(clans[0].name);
  const handleClan = index => {
    SetSelectedClan(clans[index].name);
  };
  const setting = {
    infinite: true,
    nextArrow: <NextArrow name={"arrow_forward_ios"} />,
    prevArrow: <NextArrow name={"arrow_back_ios"} />,
    afterChange: current => props.changeClanValue(clans[current].name)
  };
  return (
    <>
      <h2>clans</h2>
      <Slider {...setting}>
        {clans.map(({ name, img, explanation, traduction }, index) => {
          return (
            <div key={index}>
              <div>{traduction ? traduction : name}</div>
              <img src={`img/clans/${img}`} />
              <p>{explanation}</p>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Clans;

import React from "react";
import Slider from "react-slick";
import { useFormContext } from "react-hook-form";
import { clans, dataDescription } from "../../../utils/data";
import Icon from "@material-ui/core/Icon";

const Arrow = ({ className, onClick, name }) => (
  <Icon className={className} onClick={onClick}>
    {name}
  </Icon>
);

const Carroussel = () => {
  const { setValue } = useFormContext();
  const setting = {
    infinite: true,
    lazyLoad: true,
    nextArrow: <Arrow name={"arrow_forward_ios"} />,
    prevArrow: <Arrow name={"arrow_back_ios"} />,
    afterChange: current => setValue("clan", clans[current].name)
  };
  return (
    <Slider {...setting}>
      {clans.map(({ name, img, explanation, traduction }, index) => {
        return (
          <div key={index}>
            <div>{traduction ? traduction : name}</div>
            <img alt={`clan`} src={`img/clans/${img}`} />
            <p>{explanation}</p>
          </div>
        );
      })}
    </Slider>
  );
};

const Clans = () => {
  const { errors } = useFormContext();

  console.log(errors);
  return (
    <>
      <h2>clans</h2>
      <Carroussel />
    </>
  );
};

export default Clans;

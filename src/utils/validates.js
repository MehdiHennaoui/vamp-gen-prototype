import { dataDescription } from "./data";

export const valditeDescription = (values, dataDescription) => {
  const array = dataDescription.find(input => input.require === true);
  console.log(array);
};

import { dataDescription } from "./data";

export const valditeDescription = () => {
  const array = dataDescription.find(input => input.require === true);
  console.log(array);
};

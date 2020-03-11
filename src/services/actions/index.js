import { DISPLAY_EXPLANATION, HIDDEN_EXPLANATION } from "../constants";

export const displayExplanation = name => {
  return {
    type: DISPLAY_EXPLANATION,
    name
  };
};

export const hiddenEplanation = name => {
  return {
    type: HIDDEN_EXPLANATION,
    name
  };
};

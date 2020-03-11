import { DISPLAY_EXPLANATION, HIDDEN_EXPLANATION } from "../constants";

const initialState = [];

const visibleExplanations = (state = initialState, action) => {
  if (action.type === DISPLAY_EXPLANATION) {
    return [...state, action.name];
  }
  if (action.type === HIDDEN_EXPLANATION) {
    const newState = state.filter(element => element !== action.name);
    return newState;
  }
  return state;
};
export default visibleExplanations;

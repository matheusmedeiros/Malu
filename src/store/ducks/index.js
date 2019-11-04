import { combineReducers } from "redux";

import coords, { INITIAL_STATE as COORDS_INITIAL_STATE } from "./coords";
import forecasts, { INITIAL_STATE as FORECASTS_INITIAL_STATE } from "./forecasts";

export const initialState = {
  coords: { ...COORDS_INITIAL_STATE },
  forecasts: { ...FORECASTS_INITIAL_STATE },
};

export default combineReducers({
  coords,
  forecasts
});
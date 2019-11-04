import { all, takeLatest } from "redux-saga/effects";

import { Types as forecastsActionsTypes } from "../ducks/forecasts";
import { getForecasts } from "./forecasts";

export default function* rootSaga() {
  yield all([
    takeLatest(forecastsActionsTypes.SAVE_FORECASTS_REQUEST, getForecasts)
  ]);
}
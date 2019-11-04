import { call, put } from "redux-saga/effects";
import Api from "../../services/api";

import { Creators as forecastsActions } from "../ducks/forecasts";

export function* getForecasts(action) {
  const { latitude, longitude } = action.payload;
  try {
    const { data: locationData } = yield call(Api.get, `/api/location/search/?lattlong=${latitude},${longitude}`);
    const { data: forecasts } = yield call(Api.get, `/api/location/${locationData[0].woeid}/`);

    yield put(forecastsActions.successSaveForecasts({ forecasts: forecasts.consolidated_weather, stateName: locationData[0].title }));
  } catch (error) {
    yield put(forecastsActions.failureSaveForecasts(error));
  }
}
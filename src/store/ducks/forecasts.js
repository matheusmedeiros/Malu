import { formatData } from '../../utils';

export const Types = {
  SAVE_FORECASTS_REQUEST: "forecasts/SAVE_FORECASTS_REQUEST",
  SAVE_FORECASTS_SUCCESS: "forecasts/SAVE_FORECASTS_SUCCESS",
  SAVE_FORECASTS_FAILURE: "forecasts/SAVE_FORECASTS_FAILURE",
  UPDATE_FORECASTS_SCALES: "forecasts/UPDATE_FORECASTS_SCALES",
  SET_IS_FAHRENHEIT: "forecasts/SET_IS_FAHRENHEIT"
};

export const INITIAL_STATE = {
  isFahrenheit: false,
  forecasts: null,
  loading: false,
  error: false
};

export default function forecasts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SAVE_FORECASTS_REQUEST:
      return { ...state, loading: true };
    case Types.SAVE_FORECASTS_SUCCESS:
      return {
        isFahrenheit: false,
        forecasts: action.payload,
        loading: false,
        error: false
      };
    case Types.SAVE_FORECASTS_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.UPDATE_FORECASTS_SCALES:
      return { ...state, forecasts: action.payload };
    case Types.SET_IS_FAHRENHEIT:
      return { ...state, isFahrenheit: action.payload };
    default:
      return state;
  }
}

export const Creators = {
  requestSaveForecasts: coords => ({
    type: Types.SAVE_FORECASTS_REQUEST,
    payload: coords
  }),
  successSaveForecasts: data => {
    const { forecasts, stateName } = data;
    const filteredForecasts = forecasts
      .slice(0, 4)
      .map(forecast => ({
        id: forecast.id,
        stateName: stateName,
        temp: Math.trunc(forecast.the_temp),
        date: formatData(forecast.applicable_date),
        iconUrl: `https://www.metaweather.com/static/img/weather/ico/${forecast.weather_state_abbr}.ico`
      }));

    return {
      type: Types.SAVE_FORECASTS_SUCCESS,
      payload: filteredForecasts
    }
  },
  failureSaveForecasts: (error) => ({
    type: Types.SAVE_FORECASTS_FAILURE,
    payload: { error }
  }),
  updateForecastsScales: forecasts => ({
    type: Types.UPDATE_FORECASTS_SCALES,
    payload: forecasts
  }),
  setIsFahrenheit: isFahrenheit => ({
    type: Types.SET_IS_FAHRENHEIT,
    payload: isFahrenheit
  }),
};
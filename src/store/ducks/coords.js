export const Types = {
  SAVE_COORDS: "repos/SAVE_COORDS",
};

export const INITIAL_STATE = {
  latitude: '',
  longitude: ''
};

export default function repos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SAVE_COORDS:
      return { latitude: action.payload.latitude, longitude: action.payload.longitude };
    default:
      return state;
  }
}

export const Creators = {
  saveCoords: coords => ({
    type: Types.SAVE_COORDS,
    payload: coords
  }),
};
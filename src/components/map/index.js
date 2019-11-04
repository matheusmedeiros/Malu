import React from "react";
import MapView from "react-native-maps";

import { connect } from "react-redux";

import { Container } from './styles';

function Map({ latitude, longitude }) {

  return (
    <>
      <Container>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
          }}
          showsUserLocation
          loadingEnabled
        />
      </Container>
    </>
  );
};

const mapsStateToProps = state => ({
  latitude: state.coords.latitude,
  longitude: state.coords.longitude,
});

export default connect(
  mapsStateToProps
)(Map);
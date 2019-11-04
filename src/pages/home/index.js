import React, { useEffect } from "react";
import Geolocation from 'react-native-geolocation-service';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as CoordsCreators } from "../../store/ducks/coords";
import { Creators as ForecastsCreators } from "../../store/ducks/forecasts";

import { convertTempScale } from '../../utils';

import ForecastsList from "../../components/forecastsList";
import Map from "../../components/map";

import {
  Switch,
  ActivityIndicator
} from 'react-native';

import {
  Container,
  Header,
  Title,
  Footer,
  Scales,
  LoadingContainer
} from "./styles";

function Home({
  isFahrenheit,
  forecasts,
  saveCoords,
  requestSaveForecasts,
  updateForecastsScales,
  setIsFahrenheit
}) {
  const modifyScale = () => {
    const newForecastsData = forecasts.map(forecast => ({
      ...forecast,
      temp: convertTempScale(isFahrenheit, forecast.temp)
    }));

    setIsFahrenheit(!isFahrenheit);
    updateForecastsScales(newForecastsData);
  }

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        saveCoords({ latitude, longitude });
        requestSaveForecasts({ latitude, longitude });
      },
      (error) => {
        console.log(error)
      },
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000
      }
    )
  }, [])

  return (
    <>
      {forecasts ?
        <Container>
          <Header>
            <Title>{forecasts[0].stateName}</Title>
            <Title>{`${forecasts[0].temp}º`}</Title>
          </Header>
          <Map />
          <ForecastsList />
          <Footer>
            <Scales>Celsius / fahrenheit</Scales>
            <Switch
              value={isFahrenheit}
              onChange={() => modifyScale()}
            />
          </Footer>
        </Container>
        :
        <LoadingContainer>
          <ActivityIndicator size="large" color="#0000ff" />
        </LoadingContainer>
      }
    </>
  );
};

const mapsStateToProps = state => {
  return {
    forecasts: state.forecasts.forecasts,
    isFahrenheit: state.forecasts.isFahrenheit
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  ...CoordsCreators, ...ForecastsCreators
}, dispatch);

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(Home);

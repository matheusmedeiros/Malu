import React from 'react';

import { connect } from "react-redux";

import { List, Forecast, Item, Container, Icon } from './styles';

function forecastsList({ forecasts }) {
  return (
    <Container>
      <List>
        {forecasts.map(item => (
          <Forecast key={item.id}>
            <Item>{item.date}</Item>
            <Item>{`${item.temp}º`}</Item>
            <Icon source={{ uri: item.iconUrl }} />
          </Forecast>
        ))}
      </List>
    </Container>
  );
};

const mapsStateToProps = state => ({
  forecasts: state.forecasts.forecasts,
});

export default connect(
  mapsStateToProps
)(forecastsList);

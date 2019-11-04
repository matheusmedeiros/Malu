import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.View`
  flexGrow: 0
  padding: 0 16px;  
  border: 1px solid #000;
`;

export const Forecast = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom-width: 0.5px;
  border-bottom-color: #000;
  border-style: solid;
`;

export const Item = styled.Text`
  font-size: 18px;
`;

export const Icon = styled.Image`
  width: 30px;
  height: 30px;
`;

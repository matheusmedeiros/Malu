import React from 'react';
import { Provider } from 'react-redux';
import {
  View,
  StatusBar,
  SafeAreaView
} from 'react-native';

import store from './store';

import Home from './pages/home';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </View>
    </Provider>
  );
};

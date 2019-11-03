import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView
} from 'react-native';

export default function App ()  {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <View>
            <Text>Hello world</Text>
          </View>
      </SafeAreaView>
    </>
  );
};

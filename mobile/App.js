import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/Routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7"/>
      <Routes /> 
    </>
  );
}

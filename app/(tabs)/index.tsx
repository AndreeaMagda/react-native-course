import { View } from 'react-native';
import React from 'react';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Box color="pink" />
      <Box color="purple" />
      <Box color="navy" />
    </View>
  );
}

export const Box = (props: { color: string }) => (
  <View
    style={{ width: 100, height: 100, backgroundColor: props.color, margin: 8 }}
  />
);

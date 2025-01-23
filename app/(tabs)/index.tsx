import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

export default function HomeScreen() {
  const [pressedCount, setPressedCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ margin: 16, fontSize: 16, textAlign: 'center' }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : "The button isn't pressed yet"}
      </Text>
      <Button
        title="Press me"
        onPress={() => setPressedCount(pressedCount + 1)}
        disabled={pressedCount > 3}
      />
    </View>
  );
}

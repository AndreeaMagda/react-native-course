import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function HomeScreen() {
  const [name, setName] = useState('');

  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
    >
      <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : 'What is your name?'}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={(text) => setName(text)}
        secureTextEntry
      />
    </View>
  );
}

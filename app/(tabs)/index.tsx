import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [name, setName] = useState('');

  const CustomInput = ({
    label,
    placeholder,
    value,
    onChange,
  }: {
    label: string;
    placeholder: string;
    value: string;
    onChange: (text: string) => void;
  }) => {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomInput
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(text) => setName(text)}
      />
      <Button title="Submit" onPress={() => alert(`Hello, ${name}`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
});

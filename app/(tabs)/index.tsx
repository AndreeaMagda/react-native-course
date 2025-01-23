import { View, Text, Image, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>Scroll me!</Text>
      <View style={{ height: 400, backgroundColor: '#e5e5e5' }}>
        {/* This is our scrollable area */}
        <ScrollView>
          <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
          <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
          <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
        </ScrollView>
      </View>
    </View>
  );
}

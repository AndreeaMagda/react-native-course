import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, color: 'purple' }}>
        The <Text style={{ fontWeight: 'bold' }}>quick brown fox </Text>jumps
        over the lazy dog
      </Text>
    </View>
  );
}

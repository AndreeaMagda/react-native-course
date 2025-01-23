import { View, Text, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, color: 'purple' }}>
        The <Text style={{ fontWeight: 'bold' }}>quick brown fox </Text>jumps
        over the lazy dog
      </Text>
      <Image
        style={{ width: 100, height: 100, marginTop: 20 }}
        source={{
          uri: 'https://www.italpassion.fr/wp-content/uploads/2024/12/charles-leclerc-ferrari.jpg',
        }}
      />
    </View>
  );
}

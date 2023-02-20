import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Game from './src/components/Game';

export default function App() {
  const randomNumberCount = 6;
  const randomNumbers = Array.from({ length: randomNumberCount }).map(
    () => 1 + Math.floor(10 * Math.random())
  );
  return (
    <View style={styles.container}>
      <Game
        randomNumberCount={randomNumberCount}
        randomNumbers={randomNumbers}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
    marginTop: '20%',
  },
});

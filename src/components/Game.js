import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from 'react-native';
import RandomNumbers from './RandomNumbers';

export default function Game(props) {
  const [selectedNumbers, selectNumber] = useState([]);

  // useEffect(() => {
  //   gameStatus();
  // }, [selectedNumbers]);
  const isNumberSelected = (numberIndex) => {
    return selectedNumbers.indexOf(numberIndex) >= 0;
  };

  const randomNumbers = Array.from({ length: props.randomNumberCount }).map(
    () => 1 + Math.floor(10 * Math.random())
  );

  const gameStatus = () => {
    const numbers = [...selectedNumbers];
    console.log(numbers);
    const sumSelected = numbers.reduce(
      (acc, cur) => acc + randomNumbers[cur],
      0
    );
    console.log(sumSelected);
    return sumSelected;
    // console.log(updatedNumbers);
  };

  const target = randomNumbers
    .slice(0, props.randomNumberCount - 2)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.target}>{target}</Text>
      <View style={styles.randomContainer}>
        {randomNumbers.map((item, index) => (
          <TouchableOpacity
            onPress={(e) => {
              e.preventDefault();
              let numbers = [...selectedNumbers, index];
              console.log(numbers);
              selectNumber(numbers);
            }}
          >
            <Text
              id={index}
              style={[
                styles.numbers,
                isNumberSelected(index) && styles.selected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    paddingTop: 30,
  },
  target: {
    fontSize: 40,
    backgroundColor: '#bbb',
    margin: 50,
    textAlign: 'center',
    paddingHorizontal: 50,
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  numbers: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 25,
    marginVertical: 25,
    textAlign: 'center',
    fontSize: 35,
    color: 'black',
  },
  selected: {
    opacity: 0.3,
  },
});

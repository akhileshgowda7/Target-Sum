import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from 'react-native';

export default function RandomNumbers(props) {
  const [selectedNumbers, selectNumber] = useState([]);

  const isNumberSelected = (numberIndex) => {
    return selectedNumbers.indexOf(numberIndex) >= 0;
  };

  // const handlePress = (numberIndex) => {
  //   if (!isNumberSelected(numberIndex)) {
  //     const updatedNumbers = [...selectedNumbers, numberIndex];
  //     // console.log(updatedNumbers);
  //     selectNumber(updatedNumbers);
  //   }
  // };

  // useEffect(() => {
  //   // console.log(props.randomNumbers);
  //   console.log(selectedNumbers);
  // }, [selectedNumbers]);

  // const gameStatus = () => {
  //   const numbers = [...selectedNumbers];
  //   console.log(numbers);
  //   const sumSelected = numbers.reduce(
  //     (acc, cur) => acc + props.randomNumbers[cur],
  //     0
  //   );
  //   // console.log(updatedNumbers);
  // };
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(selectedNumbers);
        const updatedNumbers = [...selectedNumbers, props.id];
        selectNumber(updatedNumbers);
        console.log(updatedNumbers);
      }}
    >
      <Text
        id={props.id}
        style={[styles.numbers, isNumberSelected(props.id) && styles.selected]}
      >
        {props.number}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  numbers: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 25,
    marginVertical: 25,
    textAlign: 'center',
    fontSize: 35,
  },
  selected: {
    opacity: 0.3,
  },
});

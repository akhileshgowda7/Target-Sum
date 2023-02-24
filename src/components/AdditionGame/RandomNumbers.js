import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function RandomNumbers(props) {
  const [selectedNumbers, selectNumber] = useState([]);

  

  const isNumberSelected = (numberIndex) => {
    return selectedNumbers.indexOf(numberIndex) >= 0;
  };

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

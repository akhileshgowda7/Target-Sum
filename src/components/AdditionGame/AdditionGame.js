import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Levels from './Levels';
import UrgeWithPleasureComponent from './UrgeWithPleasureComponent';

export default function AdditionGame(props) {
  const [selectedNumbers, selectNumber] = useState([]);
  const [result, setResult] = useState(false);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    let status = gameStatus();
    if (status == true) {
      let curLevel = level;
      setLevel(curLevel + 1);
      let curCount = props.randomNumberCount;
      selectNumber([]);
      props.setRandomCount(curCount + 1);
    } else if (status == 'lost') {
      setLevel(0);
    }
  }, [selectedNumbers]);

  const isNumberSelected = (numberIndex) => {
    return selectedNumbers.indexOf(numberIndex) >= 0;
  };

  const gameStatus = () => {
    let isExpired = result;
    const numbers = [...selectedNumbers];
    const sumSelected = numbers.reduce(
      (acc, cur) => acc + props.randomNumbers[cur],
      0
    );
    // console.log(props.randomNumbers);
    console.log(sumSelected);

    if (sumSelected == target) {
      return true;
    } else if (sumSelected > target) {
      return 'lost';
    } else if (isExpired) {
      return 'lost';
    }
  };
  let d = new Date();
  d.setMinutes(d.getMinutes() + 30);

  const target = props.randomNumbers
    .slice(0, props.randomNumberCount - 2)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <View
      style={[
        styles.container,
        gameStatus() && styles.win,
        gameStatus() == 'lost' && styles.loose,
      ]}
    >
      <Text style={styles.target}>{target}</Text>
      <Levels curLevel={level} />
      <View style={styles.randomContainer}>
        {props.randomNumbers.map((item, index) => (
          <TouchableOpacity
            onPress={(e) => {
              e.preventDefault();
              let numbers = [...selectedNumbers, index];
              console.log(numbers);
              selectNumber(numbers);
            }}
          >
            <Text
              key={index}
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
      <UrgeWithPleasureComponent timer={result} endTimer={setResult} />
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
    marginTop: 50,
    marginBottom: 20,
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
  win: {
    backgroundColor: 'green',
  },
  loose: {
    backgroundColor: 'red',
  },
  levels: {
    textAlign: 'center',
    marginBottom: '20px',
  },
});

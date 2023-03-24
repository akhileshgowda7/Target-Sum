import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import AdditionGame from "../AdditionGame/AdditionGame";
import ChemistryGame from "../ChemistryGame/ChemistryGame";

const Add = () => {
  const randomNumberCount = 6;
  const randomNumbers = Array.from({ length: randomNumberCount }).map(
    () => 1 + Math.floor(10 * Math.random())
  );
  return (
    <>
      <AdditionGame
        randomNumberCount={randomNumberCount}
        randomNumbers={randomNumbers}
      />
    </>
  );
};

const WIP = () => <Text>WIP</Text>;

const GlobalBottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "add",
      title: "Addition Game",
      focusedIcon: "plus-thick",
      unfocusedIcon: "plus-outline",
    },
    {
      key: "chem",
      title: "Chemistry Game",
      focusedIcon: "flask-round-bottom-empty",
      unfocusedIcon: "flask-round-bottom",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    add: Add,
    chem: ChemistryGame,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default GlobalBottomNav;

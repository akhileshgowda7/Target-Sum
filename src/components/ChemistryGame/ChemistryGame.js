import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ChemistryGame = () => {
  useEffect(() => {
    fetch("https://neelpatel05.pythonanywhere.com")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <Text style={styles.title}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    textAlign: "center",
    marginTop: 90,
    fontStyle: "bold",
  },
});

export default ChemistryGame;

import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ChemistryGame = () => {
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

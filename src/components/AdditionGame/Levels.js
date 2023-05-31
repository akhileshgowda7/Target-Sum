import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Levels = (props) => {
  return (
    <View>
      <Text style={{ fontSize: '20' }}>Level = {props.curLevel}</Text>
    </View>
  );
};

export default Levels;

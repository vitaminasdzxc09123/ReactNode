import React from 'react';
import {View, Text} from 'react-native';
import styles from '../Left/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Left = () => {
  return (
    <View style={styles.ViewAdd}>
      <AntDesign
        style={{
          fontSize: 20,
          color: 'gray',
          marginTop: -18,
          marginLeft: -8,
        }}
        name="left"
      />
    </View>
  );
};

export default Left;

import React from 'react';
import {View} from 'react-native';
import styles from '../Right/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Right = () => {
  return (
    <View style={styles.ViewAdd}>
      <AntDesign
        style={{
          fontSize: 20,
          color: 'gray',
        }}
        name="right"
      />
    </View>
  );
};

export default Right;

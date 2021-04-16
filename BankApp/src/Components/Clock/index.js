import React from 'react';
import {View, Text} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from '../Clock/styles';
const Clock = () => {
  return (
    <View style={styles.ViewClock}>
      <Text style={styles.TextClock}>$1,340.10</Text>
      <SimpleLineIcons
        style={{
          fontSize: 25,
          color: 'black',
          marginTop: 4,
          marginLeft: 10,
        }}
        name="clock"
      />
    </View>
  );
};

export default Clock;

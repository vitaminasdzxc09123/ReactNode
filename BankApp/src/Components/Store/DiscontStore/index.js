import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../DiscontStore/styles';

const Discont = ({children}) => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0.1, 0.8]}
      colors={['#A7BFE8', '#D3CCE3']}
      style={styles.LinearGradient}>
      <View style={styles.DisconView}>
        <Text style={styles.DiscontText}>{children}</Text>
      </View>
    </LinearGradient>
  );
};

export default Discont;

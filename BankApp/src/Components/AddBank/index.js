import React from 'react';
import {View} from 'react-native';
import styles from '../AddBank/styles';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AddBank = () => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0.1, 0.8]}
      colors={['#A7BFE8', '#D3CCE3']}
      style={styles.LinearGradient}>
      <View style={styles.ViewAdd}>
        <AntDesign
          style={{
            fontSize: 35,
            color: '#ffff',
            marginTop: 13,
            marginLeft: -8,
          }}
          name="plus"
        />
      </View>
    </LinearGradient>
  );
};

export default AddBank;

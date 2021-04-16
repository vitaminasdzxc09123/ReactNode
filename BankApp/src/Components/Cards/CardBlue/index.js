import React from 'react';
import {Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CardBlue = ({children}) => {
  return (
    <LinearGradient
      start={{x: 0.1, y: 0.35}}
      end={{x: 0.9, y: 1.5}}
      colors={['#3E7DBA', '#3E7DBA']}
      style={styles.LinearGradient}>
      <View style={styles.DisconView}>
        <Text style={styles.DiscontText}>{children}</Text>
        <Image
          style={styles.Image}
          source={require('../../../Image/master.png')}
        />
        <View style={styles.ViewRemove}>
          <AntDesign
            style={{
              fontSize: 25,
              marginLeft: 1,
              marginTop: 15,
              color: '#ffff',
            }}
            name="delete"></AntDesign>
        </View>
      </View>
    </LinearGradient>
  );
};

export default CardBlue;

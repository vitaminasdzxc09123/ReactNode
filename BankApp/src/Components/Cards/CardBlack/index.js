import React from 'react';
import {Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {BlurView} from '@react-native-community/blur';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CardBlack = ({children}) => {
  return (
    <LinearGradient
      start={{x: 0.1, y: 0.35}}
      end={{x: 0.9, y: 1.5}}
      colors={['#485563', '#29323c']}
      style={styles.LinearGradient}>
      <View style={styles.DisconView}>
        <Text style={styles.DiscontText}>{children}</Text>
        <Image
          style={styles.Image}
          source={require('../../../Image/visa.png')}
        />
        <View style={styles.ViewRemove}>
          <BlurView style={styles.absolute} blurType="light" blurAmount={2}>
            <AntDesign
              style={{
                fontSize: 25,
                alignSelf: 'center',
                marginTop: 15,
                color: '#ffff',
              }}
              name="delete"
            />
          </BlurView>
        </View>
      </View>
    </LinearGradient>
  );
};

export default CardBlack;

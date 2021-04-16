import React from 'react';
import styles from '../../Components/Like/styles';
import {View, ImageBackground} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Like = () => {
  return (
    <View style={styles.absoluteStore}>
      <ImageBackground
        style={styles.Image}
        blurRadius={4}
        source={require('../../Image/shop.jpg')}>
        <AntDesign
          style={{
            fontSize: 27,
            color: '#ffff',
            marginTop: 9,
            marginLeft: 9,
          }}
          name="hearto"
        />
      </ImageBackground>
    </View>
  );
};

export default Like;

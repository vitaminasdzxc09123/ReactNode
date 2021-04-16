import React from 'react';
import {Text} from 'react-native';
import styles from '../TitleStore/styles';

const Title = ({children, size = 18}) => {
  return <Text style={styles.Title}>{children}</Text>;
};

export default Title;

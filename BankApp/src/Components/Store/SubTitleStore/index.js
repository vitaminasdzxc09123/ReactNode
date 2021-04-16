import React from 'react';
import {Text} from 'react-native';
import styles from '../SubTitleStore/styles';

const SubTitle = ({children}) => {
  return <Text style={styles.container}>{children}</Text>;
};

export default SubTitle;

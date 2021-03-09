import React from 'react';
import { Text } from 'react-native';

const Title2 = ({ children, numberOfLines = 2, size = 20 }) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{ fontWeight: '100',color: "#FFF",marginLeft:7, fontSize: size }}
    >
      {children}
    </Text>
  );
};

export default Title2;
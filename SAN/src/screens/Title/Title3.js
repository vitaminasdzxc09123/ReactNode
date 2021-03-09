import React from 'react';
import { Text } from 'react-native';

const Title2 = ({ children, numberOfLines = 2, size = 14}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{ fontWeight: '100',color: "black",marginLeft:105,marginTop:-20, fontSize: size }}
    >
      {children}
    </Text>
  );
};

export default Title2;
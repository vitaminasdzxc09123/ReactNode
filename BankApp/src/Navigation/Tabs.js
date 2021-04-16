import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../Screens/MainScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Image} from 'react-native';
import styles from '../Navigation/styles';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        name="Maine"
        component={MainScreen}
        options={{
          tabBarIcon: () => (
            <AntDesign
              style={{fontSize: 27, color: 'gray'}}
              name="appstore-o"
            />
          ),
        }}
      />

      <Tab.Screen
        name="First"
        component={MainScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.Image}
              source={require('../../src/Image/cash.png')}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Second"
        component={MainScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons
              style={{fontSize: 27, color: 'gray'}}
              name="person-outline"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;

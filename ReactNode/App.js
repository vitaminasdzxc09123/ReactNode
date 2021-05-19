import React from 'react';
import {View, Text, Button, Alert} from 'react-native';

fetch('http://192.168.1.102:3000/', {
  method: 'GET',
})
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log(error.message));

const App = () => {
  const createThreeButtonAlert = () => Alert.alert('check terminal');

  return (
    <View>
      <Button title={'press'} onPress={createThreeButtonAlert} />
    </View>
  );
};

export default App;

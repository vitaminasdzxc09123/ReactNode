import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import LinearGradient from 'react-native-linear-gradient';
import { color } from 'react-native-reanimated';


const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('')

  const sendCred= async ( props )=>{
    fetch("http://10.0.2.2:8000/signin",{
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      "email":email,
      "password":password
    })
  })
    .then(res=>res.json())
    .then(async (data)=>{
          try {
            await AsyncStorage.setItem('token', data.token)
            props.navigation.replace("Block")
           } catch (e) {
            console.log("error hai",e)
             Alert(e)
           }
    })
  }
  return (
    <>
    <LinearGradient 
     start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
     locations={[0.1, 0.8]}
     colors={['#A770EF', '#4568DC']} style={styles.linearGradient}>
   <KeyboardAvoidingView behavior="position">
  
  
 
   <Text
   style={{
     color: "white",
     fontSize:30,
     marginLeft:90,
     marginTop:140
   }}
   >Authorization</Text>

<TextInput
     label='Email'
     mode="outlined"
     value={email}
     style={{marginLeft:18,marginRight:18,marginTop:18}}
     theme={{colors:{primary:"#159957"}}}
     onChangeText={(text)=>setEmail(text)}
   />
   <TextInput
     label='password'
     mode="outlined"
     secureTextEntry={true}
     value={password}
     onChangeText={(text) => {setPassword(text)}}
      style={{marginLeft:18,marginRight:18,marginTop:15, }}
      theme={{colors:{primary:"#159957"}}}
   />
    <Button 
     mode="contained" 
     style={{marginLeft:18,marginRight:18,marginTop:18}}
     onPress={() => sendCred(props) }>
    Login
  </Button>
  <TouchableOpacity>
  <Text
   style={{
     fontSize:18,
     marginLeft:110,
     marginTop:20,
     color: "white"
   }}
   onPress={()=>props.navigation.replace("signup")}
   >сreate an account</Text>
  </TouchableOpacity>



</KeyboardAvoidingView>
</LinearGradient>
   </>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  

  },
});

export default LoginScreen;
